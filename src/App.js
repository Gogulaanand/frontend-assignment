
import './App.css';
import { useState, useEffect } from 'react';
import { Projects } from './Projects';
import { Pagination } from './Pagination';


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(5);

  const API_ENDPOINT = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Kick Starter Projects</h1>
      <Projects projects={currentProjects} loading={loading} />
      <Pagination projectsPerPage={projectsPerPage} totalProjects={data.length} paginate={paginate} />
    </div>
  );
}

export default App;
