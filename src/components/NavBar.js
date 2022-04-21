import '../styles/NavBar.scss';
import LangBtn from './LangBtn';

const NavBar = (props) => {
  return (
    <nav className="header__navbar">
      <a
        className="header__navbar--link"
        href="https://github.com/MariviEscudero"
        rel="noreferrer"
        target="_blank"
      >
        GITHUB
      </a>
      <a
        className="header__navbar--link"
        href="https://www.linkedin.com/in/mariviescudero/"
        rel="noreferrer"
        target="_blank"
      >
        LINKEDIN
      </a>
      <a
        className="header__navbar--link"
        href="https://twitter.com/MoranMarivi"
        rel="noreferrer"
        target="_blank"
      >
        TWITTER
      </a>
      <a
        className="header__navbar--link"
        href="mailto:mariviesmo@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        CONTACT
      </a>
      <LangBtn
        data={props.data}
        value={props.value}
        handleLangBtn={props.handleLangBtn}
      />
    </nav>
  );
};
export default NavBar;
