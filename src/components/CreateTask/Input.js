import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = props => {

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

    const RefInput = React.forwardRef((props, ref) => (
        <Input ref={ref} />
    ));

    return (
        <RefInput />
    )
}

Input.propTypes = {
    display: PropTypes.string
}

export default forwardRef(Input)
