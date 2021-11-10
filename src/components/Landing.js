import { Link} from 'react-scroll';
import '../styles/Landing.scss';
import Photo from '../images/f5c3de11-8857-4001-98b2-2317ad932616.jpg';


const Landing = () => {
  return (
      <header className="header" name="header">
        <h1 className="header__title">Mariví Escudero</h1>
        <h2 className="header__subt">Jr Frontend Developer</h2>
        <nav className="header__linknav">
          <a className="header__linknav--link"
            href="https://github.com/MariviEscudero"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github-alt"></i>
          </a>
          <a className="header__linknav--link"
            href="https://www.linkedin.com/in/mariviescudero/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="header__linknav--link"
            href="https://twitter.com/MoranMarivi"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a className="header__linknav--link"
            href="mailto:mariviesmo@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-at"></i>
          </a>
        </nav>
        <img className="header__image" src={Photo}alt="MariviEscudero"/>
        <nav className="header__menu">
          <button className="header__menu--btn"><Link smooth={true} to="aboutme" className="link">Sobre mí</Link></button>
          <button className="header__menu--btn"><Link smooth={true} to="projects" className="link">Mis Proyectos</Link></button>
         
          
        </nav>
      </header>
  );
};
export default Landing;
