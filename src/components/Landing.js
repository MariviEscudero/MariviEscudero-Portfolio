import '../styles/Landing.scss';
import LandingImage from '../images/Code-typing-bro.png';
import Btn from './LinkBtn';
import NavBar from './NavBar';
import Icons from './Icons';

const Landing = (props) => {
  return (
    <header className="header" name="header">
      <NavBar 
       data={props.data}
       value = {props.value} 
       handleLangBtn={props.handleLangBtn}/>
      <div className="flex">
      <div className="flex2">
          <img src={LandingImage} alt="pc_image" className="header__image" />
        </div>
        <div className="flex1">
          <p className="header__par">Hello world!!!</p>
          <h1 className="header__title">
            <span className="header__span1">
              {`<`}
              <span className="header__span2">h1</span>
              {`> `}
            </span>
            I'm Mariví Escudero
            <span className="header__span1">
              {`  </`}
              <span className="header__span2">h1</span>
              {`>`}
            </span>
          </h1>
          <h2 className="header__subt">Jr Frontend Developer</h2>
          <Icons />
          <nav className="header__menu">
            <Btn text={props.data[0].btn1} link={'aboutme'} />
            <Btn text={props.data[0].btn2} link={'projects'} />
          </nav>
        </div>
       
      </div>
    </header>
  );
};
export default Landing;
