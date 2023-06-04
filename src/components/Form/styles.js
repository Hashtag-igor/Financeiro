import styled from "styled-components";

export const Container = styled.div`
    margin: 30px auto;
    width: 90%;
    box-shadow: 0px 0px 5px #ccc;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 20px;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    width: 30%;

    input{
        padding-left: 10px;
        font-size: 16px;
    }

    @media screen and (max-width: 768px){
        width: 60%; 
    }

    @media screen and (max-width: 480px){
        width: 90%; 
    }

`

export const Label = styled.label`
    @media screen and (max-width: 480px){
        margin: auto;   
    }
`;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 8px;
    font-size: 20px;
    border: 1px solid #808080;

    @media screen and (max-width: 768px){
        width: 100%;
        margin: auto;   
        font-size: 20px;
        border: 1px solid black;
    }
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 10px;
        margin-right: 10px;
        accent-color: black;
    }
`

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: teal;

    @media screen and (max-width: 768px){
        width: 60%; 
    }

    @media screen and (max-width: 480px){
        width: 90%;
        margin: auto;  
        padding: 10px;
    }

`