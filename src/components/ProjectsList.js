import { Link } from 'react-scroll';
import '../styles/ProjectsList.scss';
import ProjectsItem from './ProjectsItem';

const ProjectsList = (props) => {
  const renderProjects = props.projectsData.map((project) => (
    <li key={project.id} className="projects__list--item">
      <ProjectsItem project={project} />
    </li>
  ));

  return (
    <section className="projects" name="projects">
      <h4 className="projects__title">Mis proyectos</h4>
      <p className="projects__text">
        Estos son mis proyectos favoritos, donde he trabajado individualmente y
        en equipo con las tecnologías aprendidas hasta ahora
      </p>
      <ul className="projects__list">{renderProjects}</ul>
      <Link smooth={true} to="header" className="link">
        <i className="scrollup far fa-caret-square-up"></i>
      </Link>
    </section>
  );
};
export default ProjectsList;
