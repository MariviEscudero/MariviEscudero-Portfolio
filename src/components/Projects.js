import { Link} from 'react-scroll';
import '../styles/Projects.scss';
import FantasticFour from '../images/140638847-afc0ba97-01b8-4327-8465-4844695c8999.png';
import BuscadorDeSeries from '../images/140638152-6a0e1272-6d3d-417a-af9b-3aa206cb9731.png';
import RickAndMorty from '../images/140638417-c6cc6226-5f7e-43b8-a7c8-4e66e572b9ca.png';
import JabbasTheHut from '../images/140638571-7019b807-35c0-4bba-8869-062261a72a37.png';

const Projects = () => {
  return (
    <section className="projects" name="projects">
      <h4 className="projects__title">Mis proyectos</h4>
      <p className="projects__text">Estos son mis proyectos favoritos, donde he trabajado individualmente y en equipo con las tecnologías aprendidas hasta ahora</p>
      <article className="projects__article">
        <h5 className="projects__article--title">Maquetación web</h5>
        <img
          className="projects__article--img"
          src={FantasticFour}
          alt="4fantasticas"
        />
        <p className="projects__article--text">
          Maquetación del sitio web responsive de las 4 fantásticas(trabajo en
          equipo), con HTML, CSS y SASS, implementación de Formspree.
        </p>
        <nav className="projects__linknav">
          <a
            className="projects__linknav--link"
            href="http://beta.adalab.es/project-promo-n-module-1-team-6/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fas fa-play"></i>
          </a>
          <a
            className="projects__linknav--link"
            href="https://github.com/Adalab/project-promo-n-module-1-team-6"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-github-alt"></i>
          </a>
         
        </nav>
      </article>
      <article className="projects__article">
        <h4 className="projects__article--title">Buscador de series de TV</h4>
        <img
          className="projects__article--img"
          src={BuscadorDeSeries}
          alt="4fantasticas"
        />
        <p className="projects__article--text">
          Proyecto individual realizado con JavaScript, HTML, CSS, filtrado de datos de API externa, busca las series que más te gusten y añádelas a favoritos, acuérdate de dormir, no las veas todas del tirón...
        </p>
        <nav className="projects__linknav">
          <a
            className="projects__linknav--link"
            href="http://beta.adalab.es/project-promo-n-module-1-team-6/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fas fa-play"></i>
          </a>
          <a
            className="projects__linknav--link"
            href="https://github.com/Adalab/project-promo-n-module-1-team-6"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-github-alt"></i>
          </a>
         
        </nav>
      </article>
      <article className="projects__article">
        <h4 className="projects__article--title">Generador de tarjetas profesionales</h4>
        <img
          className="projects__article--img"
          src={JabbasTheHut}
          alt="4fantasticas"
        />
        <p className="projects__article--text">
          Proyecto del equipo Jabba´s The Hutt, realizado con JavaScript, HTML, SASS, envío de datos a API, rellena el formulario, crea tu tarjeta de visita, y comparte en redes! 
        </p>
        <nav className="projects__linknav">
          <a
            className="projects__linknav--link"
            href="http://beta.adalab.es/project-promo-n-module-1-team-6/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fas fa-play"></i>
          </a>
          <a
            className="projects__linknav--link"
            href="https://github.com/Adalab/project-promo-n-module-1-team-6"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-github-alt"></i>
          </a>
         
        </nav>
      </article>
      <article className="projects__article">
        <h4 className="projects__article--title">Guía de personajes Rick&Morty </h4>
        <img
          className="projects__article--img"
          src={RickAndMorty}
          alt="4fantasticas"
        />
        <p className="projects__article--text">
         Proyecto individual realizado con React, HTML, SCSS. Filtrado de datos de API, control de rutas. Busca a tus personajes favoritos de la serie Rick&Morty, puedes saber mas sobre ellos haciendo click sobre cada uno.
        </p>
        <nav className="projects__linknav">
          <a
            className="projects__linknav--link"
            href="http://beta.adalab.es/project-promo-n-module-1-team-6/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fas fa-play"></i>
          </a>
          <a
            className="projects__linknav--link"
            href="https://github.com/Adalab/project-promo-n-module-1-team-6"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fab fa-github-alt"></i>
          </a>
         
        </nav>
      </article>
      <Link smooth={true} to="header" className="link">
        <i className="scrollup far fa-arrow-alt-circle-up"></i>
      </Link>
    </section>
  );
};
export default Projects;
