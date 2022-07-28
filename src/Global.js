import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle `

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        background-color: #f2f2f2;
        font-family: 'Poppins', Sans-Serif;
    }
`;

export default Global;