import {StyledContainer, Button, Form, Image} from "./styles/Container.styled";
import {useState} from 'react'
import data from '../data.js'

const Container = () => {
    const [memeImage, setMemeImage] = useState(data)
    const getMemeImage = () => {
        const memeArray = data.data.memes
        const randomNumber  = Math.floor(Math.random()* memeArray.length)
       setMemeImage(memeArray[randomNumber].url)
       
    }
    return ( 

        
        <StyledContainer>
            <Form>
                <input type="text" placeholder="top text"/>
                <input type="text" placeholder="bottom text"/>
                <Button onClick={getMemeImage}>Get a new meme image</Button>
               
            </Form>
            <Image>
            <img src={memeImage} alt="image" style={{maxWidth: '100%'}}/>
             </Image>
        </StyledContainer>
     );
}
 
export default Container;