import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.h1`
    display: block;
    font-weight: 700;
    width: 90vw;
    margin: 1rem auto;
    padding: 1rem;
    background-color: black;
    color: aliceblue;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
`

export const Header = (props) => {
    return (
        <Title>
            {props.title}
        </Title>
    )
}

export default Header; 

Header.propTypes = {
    title: PropTypes.string
}