import { PaginationProps } from "../models/newsArticle.model";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPages = () => {
    const pages = [];
    pages.push(1);
    if (currentPage > 1) {
      pages.push(currentPage - 1);
    }
    if (currentPage > 1 && currentPage < totalPages) {
      pages.push(currentPage);
    }
    if (currentPage < totalPages) {
      pages.push(currentPage + 1);
    }
    pages.push(totalPages);
    return [...new Set(pages)];
  };

  return (
    <footer className="pagination">
      {getPages().map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </footer>
  );
};

export default Pagination;
