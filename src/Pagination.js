import React, {useState} from 'react';


export const Pagination = ({ projectsPerPage, totalProjects, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProjects / projectsPerPage)

  for(let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  }

  const nextPage = () => {
    if(currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  }

  return (
    <nav aria-label="Page navigation" data-testid="pagination">
      <ul className="pagination">
        <li key="prev" className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            &lt;
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`${currentPage === number ? 'active' : ''}`}>
            <button
              onClick={() => {
                setCurrentPage(number);
                paginate(number);
              }}
              aria-current={currentPage === number ? 'page' : undefined}
            >
              {number}
            </button>
          </li>
        ))}
        <li key="next" className={`next ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
}