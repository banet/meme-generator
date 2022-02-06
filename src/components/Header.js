import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
    return ( 
        <StyledHeader>
            <img src="../images/logo.svg" alt="logo" />
            <h2>Meme Generator</h2>
            <h4>React project nr3</h4>
        </StyledHeader>
     );
}
 
export default Header;