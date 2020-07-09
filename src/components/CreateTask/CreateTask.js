import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CreateTask = props => {

    const Create = styled.button`
        display: ${ props.display };
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

    const Input = styled.input.attrs({ type: "text" })`
    display: ${ props.display };
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

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `


    return (
        <Container>
            <Input id='input-task' display={props.display} />
            <Create onClick={props.onClick}>Create</Create>
        </Container>
    )
}

CreateTask.propTypes = {
    display: PropTypes.string,
    onClick: PropTypes.func
}

export default CreateTask