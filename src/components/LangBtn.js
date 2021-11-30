const LangBtn = (props) => {
    const handleLangBtn = (ev) => {
        props.handleLangBtn(ev.target.value)
    };
  return (
    <form action="">
      <select id="lang" name="lang" value = {props.value} onChange={handleLangBtn}>
        <option value="datasp">Esp</option>
        <option value="dataen">En</option>
      </select>
    </form>
  );
};
export default LangBtn;
