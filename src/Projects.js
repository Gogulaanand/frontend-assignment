import React from 'react';

export const Projects = ({ projects, loading }) => {

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <table className="table" role="table" aria-label="Kickstarter Projects Table">
      <thead>
        <tr>
          <th className="thTd" scope="col">S.No</th>
          <th className="thTd" scope="col">Percentage funded</th>
          <th className="thTd" scope="col">Amount pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => (
          <tr key={project['s.no']} tabIndex="0">
            <td className="thTd" role="cell">{project['s.no']}</td>
            <td className="thTd" role="cell">{project['percentage.funded']}</td>
            <td className="thTd" role="cell">{project['amt.pledged']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}