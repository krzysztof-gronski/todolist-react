import styled from "styled-components";

export const QuestionForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({theme})=>theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    };
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({theme})=>theme.colors.primary};
    color: white;
    border: none;
    transition: 1s;

    &:hover{
        background: ${({theme})=>theme.colors.primaryHover};
        transform: scale(1.1);
        cursor: pointer;
    };

    &:active {
    padding: 10px;
    background: ${({theme})=>theme.colors.primaryActive};
    color: white;
    border: none;
};
`;

