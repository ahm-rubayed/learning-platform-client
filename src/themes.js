import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    backgroundColor: "#000"
};

export const darkTheme = {
    body: "#111",
    backgroundColor: "#fff"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body}
    }
`