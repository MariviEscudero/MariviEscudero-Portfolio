import { Link } from 'react-scroll';
import '../styles/Btn.scss';
const Btn = (props) => {
  return (
    <button className="header__menu--btn">
      <Link smooth={true} to={props.link} className="link">
       {props.text}
      </Link>
    </button>
  );
};
export default Btn;
