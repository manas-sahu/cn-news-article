
export interface ArticleProps {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    onClick?: () => void;
    onClose?: () => void;
  }

  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export interface SearchBarProps {
    query: string;
    onQueryChange: (value: string) => void;
  }