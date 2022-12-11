import React, { useState } from "react";
import { QuestionForm, Input, Button } from "./styled";

const Form = ({ addNewTask, inputRef }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();
        if (!newTaskContentTrimmed) {
            return;
        }
        addNewTask(newTaskContentTrimmed);
        setNewTaskContent("");
        inputRef.current.focus();
    };
    return (
        <QuestionForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </QuestionForm>
    );
};

export default Form;