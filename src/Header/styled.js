import styled from "styled-components";

export const SectionHeader = styled.header`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    border-bottom: 1px solid #ddd;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: auto;
        justify-content: center;
    }
`;

export const ListHeader = styled.h2`
    margin-block-end: 0;
    margin-block-start: 0;
`;

export const ButtonsHeader = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;

@media (max-width: 767px) {
        grid-template-columns: auto;
        justify-content: center;
    }
`;

export const ListHeaderButton = styled.button`
    transition: 1s;
    color: hsl(180, 100%, 25%);
    border: none;
    background: rgba(255, 255, 255, 0);
    padding: 0;

    &:hover{
        color: hsl(180, 100%, 30%);
        cursor: pointer;
    }
    &:disabled{
        color: gray;
        cursor: not-allowed;
    }

`;



