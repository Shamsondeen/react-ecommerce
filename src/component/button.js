import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.1rem  solid var(--lightBlue);
border-color:${props => props.cart? "var--lightBlue" : "var (--mainYellow)"}
color:${props => props.cart ? "var(--lightBlue)" : "black"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5.rem o.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cart ? "var(--lightBlue)" : "yellow"};
    color:${props => props.cart ? "var( --mainWhite)" : "black"};
}
&:focus{
    outline: none;
}
margin: .3rem;

`;