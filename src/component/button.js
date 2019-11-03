import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid yellow;
    border-color: ${props => props.cart ? "yellow": "yellow"};
    color: ${prop => (prop.cart ? "black" : "black")};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${prop => prop.cart ? "green" : "green"};
        color: var(--mainDark)
    }
}
&:focus{
    outline: none;
}
margin: .3rem;

`;