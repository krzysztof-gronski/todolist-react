import React, { useState } from "react";
import { QuestionForm, Input, Button } from "./styled";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";

const Form = ({ inputRef }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();
        if (!newTaskContentTrimmed) {
            return;
        }
        dispatch(addTask({
            content: newTaskContentTrimmed,
            done: false,
            id: nanoid(),
        }));
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