import { createGlobalStyle } from "styled-components";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,700");

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0 !important;
    }

    body {
        font-family: 'Fira Sans', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background: #f9f9f9 !important;
    }

    html, body, #root {
        height: 100%;
    }

    input, button {
        font-family: 'Fira Sans', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
