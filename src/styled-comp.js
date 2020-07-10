import styled from 'styled-components'

export const Note = styled.li`
        display: block;
        font-family: 'Amatic SC', cursive;
        font-weight: 400;
        font-size: 2rem;
        width: 50vw;
        border: 0;
        padding: 1rem;
        background-color: ${props => props.color};
        color: aliceblue;
        border-radius: 15px;
        -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);

        &:focus {
        outline: none;
    }
    `

export const Cross = styled.p`
        display: block;
        font-family: 'Amatic SC', cursive;
        font-weight: 400;
        font-size: 2rem;
        border: 0;
        padding: 1rem 2rem;
        color: red!important;
        background-color: black;
        cursor: pointer;
        margin-right: 1rem;
        color: aliceblue;
        border-radius: 15px;
        -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
        transition: all 300ms;

        &:hover {
            font-weight: 700;
        }
    `

export const Container = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
`

export const Create = styled.button`
display: ${ props => props.display };
font-family: 'Amatic SC', cursive;
font-weight: 400;
font-size: 2rem;
border: 0;
padding: 1rem;
background-color: black;
color: aliceblue;
border-radius: 15px;
-webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
transition: font-size 200ms; 

&:focus {
    outline: none;
}

&:active {
    font-size: 1.8rem;
}
`

export const Input = styled.input.attrs({ type: "text" })`
display: ${ props => props.display };
font-family: 'Amatic SC', cursive;
font-weight: 400;
font-size: 2rem;
width: 50vw;
margin-right: 1rem;
border: 0;
padding: 1rem;
background-color: black;
color: aliceblue;
border-radius: 15px;
-webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);

&:focus {
outline: none;

}
`

export const Button = styled.button`
font-family: 'Amatic SC', cursive;
font-size: 1.5rem;
background-color: darkgreen;
font-weight: 400;
color: aliceblue;
border-radius: 15px;
border: none;
padding: 1rem 2rem;
margin: 2rem 0;
-webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
transition: padding 300ms ease-out;

&:focus {
    outline: none;
}
`

export const TaskList = styled.ul`
padding: 0;
`