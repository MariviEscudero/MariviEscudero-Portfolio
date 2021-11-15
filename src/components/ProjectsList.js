import { Link } from 'react-scroll';
import '../styles/ProjectsList.scss';
import ProjectsItem from './ProjectsItem';
import AnonymousProxy from '../images/anonymousproxy.png'
import FantasticFour from '../images/las4fantasticas.png';
import BuscadorSeries from '../images/buscadordeseries.png';
import AwesomeProfileCards from '../images/jabbasthehut.png';
import RickMorty from '../images/rick&morty.png';

const ProjectsList = () => {
  const projectsData = [
    {
      id: '1',
      title: 'Anonymous Proxy',
      image: `${AnonymousProxy}`,
      description:
        'Primer proyecto de maquetación. Maq. de sitio web responsive, con HTML, CSS y SASS',
      weblink: 'https://mariviescudero.github.io/Anonymous-Proxy/',
      githublink: 'https://github.com/MariviEscudero/Anonymous-Proxy',
    },
    {
      id: '2',
      title: 'Maquetación web',
      image: `${FantasticFour}`,
      description:
        'Maquetación del sitio web responsive de las 4 fantásticas (trabajo en equipo), con HTML, CSS y SASS, implementación de Formspree.',
      weblink: 'http://beta.adalab.es/project-promo-n-module-1-team-6/',
      githublink: 'https://github.com/Adalab/project-promo-n-module-1-team-6',
    },
    {
      id: '3',
      title: 'Buscador de series de TV',
      image: `${BuscadorSeries}`,
      description:
        'Proyecto individual realizado con JavaScript, HTML, CSS, filtrado de datos de API externa, busca las series que más te gusten y añádelas a favoritos, acuérdate de dormir, no las veas todas del tirón...',
      weblink: 'https://mariviescudero.github.io/Buscador-series-TV/',
      githublink: 'https://github.com/MariviEscudero/Buscador-series-TV',
    },
    {
      id: '4',
      title: 'Generador de tarjetas profesionales',
      image: `${AwesomeProfileCards}`,
      description:
        'Proyecto del equipo Jabba´s The Hutt, realizado con JavaScript, HTML, SASS, envío de datos a API, rellena el formulario, crea tu tarjeta de visita, y comparte en redes!',
      weblink: 'http://beta.adalab.es/project-promo-n-module-2-team-2/',
      githublink: 'https://github.com/Adalab/project-promo-n-module-2-team-2',
    },
    {
      id: '5',
      title: 'Guía de personajes Rick&Morty',
      image: `${RickMorty}`,
      description:
        'Proyecto individual realizado con React, HTML, SCSS. Filtrado de datos de API, control de rutas. Busca a tus personajes favoritos de la serie Rick&Morty, puedes saber más sobre ellos haciendo click sobre cada uno.',
      weblink:
        'https://mariviescudero.github.io/Rick-and-Morty-Characters-Index/#/',
      githublink:
        'https://github.com/MariviEscudero/Rick-and-Morty-Characters-Index',
    },
  ];
  const renderProjects = projectsData.map((project) => (
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
        <i className="scrollup far fa-arrow-alt-circle-up"></i>
      </Link>
    </section>
  );
};
export default ProjectsList;
