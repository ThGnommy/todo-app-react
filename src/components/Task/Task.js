import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Task = props => {

    const colorsArray = [
        'chocolate',
        'cornflowerblue', 
        'darkmagenta', 
        'darkred', 
        'dodgerblue'
    ]

    const RandomColor = (color) => {
        color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        return color;
    }

    const Note = styled.li`
        display: block;
        font-family: 'Amatic SC', cursive;
        font-weight: 400;
        font-size: 2rem;
        width: 50vw;
        border: 0;
        padding: 1rem;
        background-color: ${RandomColor};
        color: aliceblue;
        border-radius: 15px;
        -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);

        &:focus {
        outline: none;
    }
    `

    const Cross = styled.p`
        display: block;
        font-family: 'Amatic SC', cursive;
        font-weight: 400;
        font-size: 2rem;
        border: 0;
        padding: 1rem 2rem;
        color: red!important;
        background-color: aliceblue;
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

    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `

    return (
        <Container id={props.id}>
            <Cross onClick={props.delete}>X</Cross>
            <Note>{props.text}</Note>
        </Container>
    )
}

Task.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    delete: PropTypes.func
}

export default Task
