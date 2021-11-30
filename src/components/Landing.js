import '../styles/Landing.scss';
import Photo from '../images/f5c3de11-8857-4001-98b2-2317ad932616.jpg';
import LinkNav from './LinkNav';
import Btn from './Btn';
import LangBtn from './LangBtn';


const Landing = (props) => {
  return (
    <header className="header" name="header">
      <h1 className="header__title">Mariví Escudero</h1>
      <h2 className="header__subt">Jr Frontend Developer</h2>
      <LinkNav />
      <LangBtn
      data={props.data}
      value = {props.value} 
      handleLangBtn={props.handleLangBtn}
      />
      <img className="header__image" src={Photo} alt="MariviEscudero" />
      <nav className="header__menu">
        <Btn text={'Sobre mí'} link={'aboutme'} />
        <Btn text={'Proyectos'} link={'Projects'} />
      </nav>
    </header>
  );
};
export default Landing;
