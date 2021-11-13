import { Link } from 'react-scroll';
import '../styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <section className="aboutme" name="aboutme">
      <h3 className="aboutme__title">Sobre mí</h3>
      <article className="aboutme__article">
        Ingeniero Técnico Agrícola de formación, he desarrollado mi carrera
        profesional en comercio, orientada al asesoramiento técnico de clientes,
        ventas y gestión de varias secciones y equipos. Esta experiencia me han
        dado la capacidad de adaptarme a los cambios y de ser resolutiva a la
        hora de tomar decisiones de responsabilidad y resolver problemas, así
        como de conocer las necesidades de clientes y equipos para trabajar en
        línea con ellos. Mi curiosidad, inquietud y búsqueda de nuevos retos me
        han llevado a terminar el bootcamp de Adalab, donde vuelvo a ser junior
        y busco mi primer empleo en el sector IT. Dejo por aquí mi CV para que
        me conozcas un poco más.
      </article>
      <button className="aboutme__btn">
        <a
          href="https://drive.google.com/file/d/1iDaLCUMkIDttYNs9ktbGYUvaZobLqGMI/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Ver CV
        </a>
      </button>
      <article className="aboutme__article">
        Trabajo cada día en mejorar mis conocimientos en proyectos personales
        que iré añadiendo por aquí próximamente, y cuando no estoy en ello sigo
        buscando retos en proyectos DIY, lo mismo hago un jersey que pinto una
        cómoda o te arreglo el grifo de la cocina que gotea...cualquier cosa se
        puede aprender.
      </article>
      <Link smooth={true} to="header" className="link">
        <i className="scrollup far fa-arrow-alt-circle-up"></i>
      </Link>
    </section>
  );
};
export default AboutMe;
