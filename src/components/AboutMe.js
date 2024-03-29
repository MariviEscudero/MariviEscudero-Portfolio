import Btn from './LinkBtn';
import '../styles/AboutMe.scss';
import '../styles/LinkBtn.scss';

const AboutMe = (props) => {
  const aboutmeData = props.data.filter((dat) => dat.id === '2');

  return (
    <section className="aboutme" name="aboutme">
      <h3 className="aboutme__title">{aboutmeData[0].aboutmetitle}</h3>
      <div className="aboutme__image"></div>
      <article className="aboutme__article">{aboutmeData[0].aboutme1}</article>
      <button className="aboutme__btn">
        <a
          href="https://drive.google.com/file/d/1fMD3OBqMuo9jFDdZJAOkXxBlXODfgqGY/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {`<CV/>`}
        </a>
      </button>
      <Btn text={props.data[0].btn2} link={'projects'} />
      <article className="aboutme__article">{aboutmeData[0].aboutme2}</article>
    </section>
  );
};
export default AboutMe;
