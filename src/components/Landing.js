import '../styles/Landing.scss';
import Photo from '../images/f5c3de11-8857-4001-98b2-2317ad932616.jpg';
import LinkNav from './LinkNav';
import Btn from './Btn';
import LangBtn from './LangBtn';


const Landing = (props) => {
  return (
    <header className="header" name="header">
       <LangBtn
      data={props.data}
      value = {props.value} 
      handleLangBtn={props.handleLangBtn}
      />
       <p className="header__par anim-typewriter1">
        <span className="header__span1">{`<`}<span className="header__span2">p</span>{`>`}</span>  Hello world!!! 
        <span className="header__span1">{`  </`}<span className="header__span2">p</span>{`>`}</span>
        </p>
      <h1 className="header__title anim-typewriter2">
        <span className="header__span1">{`<`}<span className="header__span2">h1</span>{`>`}</span>  I'm Mariví Escudero 
        <span className="header__span1">{`  </`}<span className="header__span2">h1</span>{`>`}</span>
        </h1>
      <h2 className="header__subt anim-typewriter3"> 
      <span className="header__span1">{`<`}<span className="header__span2">h2</span>{`>`}</span>  Jr Frontend Developer 
        <span className="header__span1">{`  </`}<span className="header__span2">h2</span>{`>`}</span></h2>
      <LinkNav />
      <img className="header__image" src={Photo} alt="MariviEscudero" />
      <nav className="header__menu">
        <Btn text={'<Sobre mí/>'} link={'aboutme'} />
        <Btn text={'<Proyectos/>'} link={'projects'} />
      </nav>
    </header>
  );
};
export default Landing;
