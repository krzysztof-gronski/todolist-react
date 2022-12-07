import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();
        if (!newTaskContentTrimmed) {
            return;
        }
        addNewTask(newTaskContentTrimmed);
        setNewTaskContent("");
    };
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button form__button--input">Dodaj zadanie</button>
        </form>
    );
};

export default Form;