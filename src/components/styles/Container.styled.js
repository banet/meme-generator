import styled from 'styled-components'

export const StyledContainer = styled.div`
    width:550px;
    background-color:#f3f4f5;
    
`
export const Form = styled.div`
    display:grid;
    grid-template: 40px 40px / 1fr 1fr;
    gap:17px;
    

    

input {
    margin-top:1rem;
    padding 1rem;
    border-radius: 5px;
    border: 1px solid #d5d4d8; 
    margin-right: 1rem;
    margin-bottom: 1rem;
    text-intend: 5px;
    
}
input:focus{
    outline:none;
    border: 1px solid #672280;
    
}

input:last-child {
    margin-right:none;
}


`


export const Button = styled.button`
    
    border:0;
    border-radius: 5px;
    padding:.68rem;
    
    background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
    cursor: pointer;
    color: white;
    font-size:1rem;
    font-weight:bold;
    transition: .3s ease;
    
    grid-column: 1 / -1;

    &:active {
        transform: scale(.97);
         
    }
    &:hover {
        opacity: .9;
    }
`

export const Image = styled.div`
margin-top:1rem;

padding:36px 36px 45px 36px 
    background:#f2f3f5;
`