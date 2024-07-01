import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
    }
    html {
        font-size: 10px;
    }
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background: papayawhip;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
