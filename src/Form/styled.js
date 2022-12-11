import styled from "styled-components";

export const QuestionForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    };
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background: hsl(180, 100%, 25%);
    color: white;
    border: none;
    transition: 1s;

    &:hover{
        background: hsl(180, 100%, 30%);
        transform: scale(1.1);
        cursor: pointer;
    };

    &:active {
    padding: 10px;
    background: hsl(180, 100%, 35%);
    color: white;
    border: none;
};
`;

