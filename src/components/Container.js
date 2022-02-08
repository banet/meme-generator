import {StyledContainer, Button, Form} from "./styles/Container.styled";

const Container = () => {
    return ( 
        <StyledContainer>
            <Form>
                <input type="text" placeholder="top text"/>
                <input type="text" placeholder="bottom text"/>
                <Button>Get a new meme image</Button>
            </Form>
            
        </StyledContainer>
     );
}
 
export default Container;