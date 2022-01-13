import { Link } from 'react-scroll';
import '../styles/AboutMe.scss';

const AboutMe = (props) => {
  const aboutmeData = props.data.filter(dat => dat.id==='2');

  return (
    <section className="aboutme" name="aboutme">
      <h3 className="aboutme__title">
      {aboutmeData[0].title}
    </h3>
    <article  className="aboutme__article">
      {aboutmeData[0].aboutme1}
    </article>
      <button className="aboutme__btn">
        <a
          href="https://drive.google.com/file/d/1iDaLCUMkIDttYNs9ktbGYUvaZobLqGMI/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {`<CV/>`}
        </a>
      </button>
      <article  className="aboutme__article">
      {aboutmeData[0].aboutme2}
    </article>
      <Link smooth={true} to="header" className="link">
      <i className="scrollup far fa-caret-square-up"></i>
      </Link>
    </section>
  );
};
export default AboutMe;
