import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body{
        padding: 30px 24px 80px 24px;
        background-color: ${(props) => (props.modeStatus ? "#141D2F" : "#F6F8FF")};
    }
    *:focus {
        outline: none;
    }
`;

export default GlobalStyle;