import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" placeholder="Co jest do zrobienia?" />
        <button className="form__button form__button--input">Dodaj zadanie</button>
    </form>
);

export default Form;