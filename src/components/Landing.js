import { Link } from 'react-scroll';
import '../styles/Landing.scss';
import Photo from '../images/f5c3de11-8857-4001-98b2-2317ad932616.jpg';
import LinkNav from './LinkNav';

const Landing = () => {
  return (
    <header className="header" name="header">
      <h1 className="header__title">Mariví Escudero</h1>
      <h2 className="header__subt">Jr Frontend Developer</h2>
      <LinkNav />
      <img className="header__image" src={Photo} alt="MariviEscudero" />
      <nav className="header__menu">
        <button className="header__menu--btn">
          <Link smooth={true} to="aboutme" className="link">
            Sobre mí
          </Link>
        </button>
        <button className="header__menu--btn">
          <Link smooth={true} to="projects" className="link">
            Proyectos
          </Link>
        </button>
      </nav>
    </header>
  );
};
export default Landing;
