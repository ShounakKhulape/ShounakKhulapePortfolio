

const ProjectPost = ({ title, category, date, image, description }) => {
    return (
      <li className="fore-post-item">
        <a href="#">
          <figure className="fore-banner-box">
            <img src={image} alt={title} loading="lazy"/>
          </figure>
          <div className="fore-content">
            <div className="fore-meta">
              <p className="fore-category">{category}</p>
              <span className="dot"></span>
              <time dateTime={date}>{date}</time>
            </div>
            <h3 className="h3 fore-item-title">{title}</h3>
            <p className="fore-text">{description}</p>
          </div>
        </a>
      </li>
    );
  }
  
  export default ProjectPost;
  