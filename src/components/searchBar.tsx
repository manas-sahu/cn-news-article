import { SearchBarProps } from "../models/newsArticle.model";

const SearchBar = ({ query, onQueryChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search for news..."
      />
    </div>
  );
};

export default SearchBar;
