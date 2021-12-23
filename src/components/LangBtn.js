import '../styles/LangBtn.scss';

const LangBtn = (props) => {
    const handleLangBtn = (ev) => {
        props.handleLangBtn(ev.target.value)
    };
  return (
    <form className="header__form" action="">
      <select className="header__form--select" id="lang" name="lang" value = {props.value} onChange={handleLangBtn}>
        <option className="header__form--select__option" value="datasp">ES</option>
        <option className="header__form--select__option"  value="dataen">EN</option>
      </select>
    </form>
  );
};
export default LangBtn;
