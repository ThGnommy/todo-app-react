import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const NewTask = (props) => {

    const Button = styled.button`
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

    return (
        <Button onClick={props.onClick}>{props.symbol} New Task</Button>
    )
}

NewTask.propTypes = {
    onClick: PropTypes.func,
    symbol: PropTypes.string
}

export default NewTask