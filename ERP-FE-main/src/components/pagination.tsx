import { FC } from 'react';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center my-4">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 mr-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-200"
        >
          Previous
        </button>
      )}
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 mx-1 border border-gray-300 rounded-md ${
            page === currentPage ? 'text-white bg-blue-500' : 'text-gray-700'
          }`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 ml-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-200"
        >
          Next
        </button>
      )}
    </div>
  );
};

export { Pagination };
