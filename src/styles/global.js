import { createGlobalStyle } from "styled-components";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
export default createGlobalStyle`
    @import url('https://fonts.googleapis/css?family=Source+Sans+Pro');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0 !important;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background: #f9f9f9 !important;
    }

    html, body, #root {
        height: 100%;
    }

    input, button {
        font-family: 'Source Sans Pro', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
