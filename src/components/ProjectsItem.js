import '../styles/ProjectsItem.scss';
const ProjectsItem = (props) => {
  return (
    <>
      <h5 className="projects__list--item__title">{props.project.title}</h5>
      <img
        src={props.project.image}
        className="projects__list--item__img"
        alt={props.project.title}
      />
      <p className="projects__list--item__text">{props.project.description}</p>
      <nav className="projects__linknav">
        <a
          className="projects__linknav--link"
          href={props.project.weblink}
          rel="noreferrer"
          target="_blank"
        >
          <i className="fas fa-play"></i>
        </a>
        <a
          className="projects__linknav--link"
          href={props.project.githublink}
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-github-alt"></i>
        </a>
      </nav>
    </>
  );
};
export default ProjectsItem;
