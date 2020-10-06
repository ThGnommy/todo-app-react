import React from 'react'
import PropTypes from 'prop-types'

import { Container, Cross, Note } from '../../styled-comp'

const Task = props => {

    return (
        <Container id={props.id}>
            <Cross onClick={props.delete}>X</Cross>
            <Note onClick={props.onClick} color={props.color} line={props.DecorationLine}>{props.text}</Note>
        </Container>
    )
}

Task.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    delete: PropTypes.func,
    color: PropTypes.string,
    DecorationLine: PropTypes.string
}

export default Task
