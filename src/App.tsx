import { useState, useEffect } from "react";
import Article from "./components/article";
import Pagination from "./components/pagination";
import Modal from "./components/modal";
import SearchBar from "./components/searchBar";
import NavBar from "./components/navBar";
import "./App.css";
import { ArticleProps } from "./models/newsArticle.model";
import { default as mock } from "./mockData.json";

const App = () => {
  // State variables to store the news articles, the current page and the total pages
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // State variables to store the selected article and the modal visibility
  const [selectedArticle, setSelectedArticle] = useState<ArticleProps | null>(
    null
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  // State variable to store the search query
  const [query, setQuery] = useState<string>("");

  // A constant to store the API key and the base URL
  const API_KEY = "3629e7b56fc747b08e7c867a523b7267";
  const BASE_URL = "https://newsapi.org/v2/top-headlines";

  // A useEffect hook to fetch the news articles from the API whenever the current page or query changes
  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_URL}?country=us&apiKey=${API_KEY}&pageSize=9&page=${currentPage}&q=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "error") {
        console.log(data.message);
        console.log(mock);

        setArticles(
          mock.articles.slice((currentPage - 1) * 9, currentPage * 9)
        );
        setTotalPages(Math.floor(mock.totalResults / 9));
      } else {
        setArticles(data.articles);
        setTotalPages(Math.floor(data.totalResults / 9));
      }
    };

    fetchData();
  }, [currentPage, query]);

  // A handler function to update the current page when a pagination button is clicked
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // A handler function to update the selected article and show the modal when an article is clicked
  const handleArticleClick = (article: ArticleProps) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  // A handler function to hide the modal when the close button is clicked
  const handleModalClose = () => {
    setShowModal(false);
  };

  // A handler function to update the query when the search bar input changes
  const handleQueryChange = (value: string) => {
    setQuery(value);
    // Reset the current page to 1 when the query changes
    setCurrentPage(1);
  };

  return (
    <div className="app">
      <header>
        <NavBar />
        <h1>CN News Articles</h1>
        <SearchBar query={query} onQueryChange={handleQueryChange} />
      </header>
      <main>
        {articles?.length > 0 ? (
          <section className="articles">
            {articles.map((article) => (
              <Article
                key={article.url}
                {...article}
                onClick={() => handleArticleClick(article)}
              />
            ))}
          </section>
        ) : (
          <h3>{errorMessage}</h3>
        )}
      </main>

      {/* Render the pagination component only if the articles array is not empty */}
      {articles?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      {showModal && selectedArticle && (
        <Modal {...selectedArticle} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default App;
