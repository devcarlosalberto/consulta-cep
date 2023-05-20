import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body,
    input,
    button {
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    }
`
