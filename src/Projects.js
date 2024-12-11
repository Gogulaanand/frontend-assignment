import React from 'react';

export const Projects = ({ projects, loading }) => {

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="thTd">S.No</th>
          <th className="thTd">Percentage funded</th>
          <th className="thTd">Amount pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => (
          <tr key={project['s.no']}>
            <td className="thTd">{project['s.no']}</td>
            <td className="thTd">{project['percentage.funded']}</td>
            <td className="thTd">{project['amt.pledged']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}