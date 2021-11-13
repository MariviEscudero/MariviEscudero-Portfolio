import '../styles/Footer.scss';
import LinkNav from './LinkNav';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        <span>&#10084;</span> 2021 Marivi Escudero
      </p>
      <LinkNav />
    </footer>
  );
};
export default Footer;
