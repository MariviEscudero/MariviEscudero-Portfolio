import { Link } from 'react-scroll';
import '../styles/AboutMe.scss';

const AboutMe = (props) => {
  const renderText1 = props.textData.map((text) => (
    <article key={text.id} className="aboutme__article">
      {text.aboutme1}
    </article>
  ));
  const renderText2 = props.textData.map((text) => (
    <article key={text.id} className="aboutme__article">
      {text.aboutme2}
    </article>
  ));


  return (
    <section className="aboutme" name="aboutme">
      <h3 className="aboutme__title">Sobre mí</h3>
      {renderText1}
      <button className="aboutme__btn">
        <a
          href="https://drive.google.com/file/d/1iDaLCUMkIDttYNs9ktbGYUvaZobLqGMI/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {`<Ver CV/>`}
        </a>
      </button>
      {renderText2}
      <Link smooth={true} to="header" className="link">
      <i className="scrollup far fa-caret-square-up"></i>
      </Link>
    </section>
  );
};
export default AboutMe;
