import React, { useEffect, useState } from 'react';
import ProjectPost from './ProjectPost';
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Number of posts per page

  useEffect(() => {
    fetch('forecasts.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;                                                                         
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className="fore" data-page="fore">
      <header>
        <h2 className="h2 article-title">Project</h2>
      </header>
      <div className="fore-posts">
        <ul className="fore-posts-list">
          {currentPosts.map((post, index) => (
            <ProjectPost
              key={index}
              title={post.title}
              category={post.category}
              date={post.date}
              image={post.image}
              description={post.description}
            />
          ))}
        </ul>
      </div>
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage - 1)} className="page-link">
              Previous
            </button>
          </li>
          {Array.from({ length: Math.ceil(projects.length / postsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(projects.length / postsPerPage) ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage + 1)} className="page-link">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Projects;
