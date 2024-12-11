import React, {useState} from 'react';


export const Pagination = ({ projectsPerPage, totalProjects, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
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
		<div>
			<ul className="pagination">
				<li key="prev" className="prev">
					<a onClick={prevPage} href="!#">
						&lt;
					</a>
				</li>
				{pageNumbers.map((number) => (
					<li key={number} className={`${currentPage === number ? 'active' : ''}`}>
						<a
							onClick={() => {
								setCurrentPage(number);
								paginate(number);
							}}
							href="!#"
						>
							{number}
						</a>
					</li>
				))}
				<li key="next" className="next">
					<a onClick={nextPage} href="!#">
						&gt;
					</a>
				</li>
			</ul>
		</div>
	);
}