import '../styles/LinkNav.scss';

const LinkNav = () => {
    return (
        <nav className="linknav">
        <a
          className="linknav__link"
          href="https://github.com/MariviEscudero"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-github-alt"></i>
        </a>
        <a
          className="linknav__link"
          href="https://www.linkedin.com/in/mariviescudero/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="linknav__link"
          href="https://twitter.com/MoranMarivi"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="linknav__link"
          href="mailto:mariviesmo@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fas fa-at"></i>
        </a>
        </nav>
    );
  };
  export default LinkNav;

