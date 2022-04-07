import { Link } from 'react-scroll';
import '../styles/ProjectsList.scss';
import ProjectsItem from './ProjectsItem';

const ProjectsList = (props) => {

  const projectsData = props.data.slice(3, props.data.length + 2);
 
  const renderProjects = projectsData.map((project) => (
    <li key={project.id} className="projects__list--item">
      <ProjectsItem project={project} />
    </li>
  ));

  return (
    <section className="projects" name="projects">
      <h4 className="projects__title">{props.data[2].projectstitle}</h4>
      <p className="projects__text">
       {props.data[2].projectsintro}
      </p>
      <ul className="projects__list">{renderProjects}</ul>
      <Link smooth={true} to="header" className="link"> <i class="fa-solid fa-arrow-up scrollup"></i>
      </Link>
     
    </section>
  );
};
export default ProjectsList;
