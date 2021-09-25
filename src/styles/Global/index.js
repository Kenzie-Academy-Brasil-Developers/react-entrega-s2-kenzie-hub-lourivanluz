import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,body,img,svg,h1,h2,h3,h4,h5,div,main,aside,footer,input,p,span,ul,li{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
ul{
    list-style: none;
}
img{
    display: block;
    max-width: 100%;
}
button{
    display: block;
    cursor: pointer;
}
`;
