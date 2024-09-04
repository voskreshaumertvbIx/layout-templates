import React from 'react';

interface PaginationProps {
  blogPerPage: number;
  totalBlog: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ blogPerPage, totalBlog, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlog / blogPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center mt-4">
      <ul className="flex list-none p-0 m-0">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-full ${
              currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-700'
            }`}
          >
            &lt;
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-full ${
                currentPage === number ? 'bg-Primary text-white' : 'bg-white text-gray-700'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className={`px-3 py-2 rounded-full ${
              currentPage === pageNumbers.length ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-700'
            }`}
          >
            &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
