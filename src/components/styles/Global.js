import { createGlobalStyle } from "styled-components";

 const GlobalStyles = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
    @import url(https://fonts.googleapis.com/css?family=Karla:200,300,regular,500,600,700,800,200italic,300italic,italic,500italic,600italic,700italic,800italic);

    * {padding: 0;
    margin:0;
    box-sizing: border-box;
}

body {
    display:flex;
    align-items: center;
    min-height: 100vh;
    justify-content:center;
    font-size: 'Karla', sans-serif;


}


`

export default GlobalStyles