import React from 'react'
import PropTypes from 'prop-types'

import { Container, Cross, Note } from '../../styled-comp'

const Task = props => {

    return (
        <Container id={props.id}>
            <Cross onClick={props.delete}>X</Cross>
            <Note color={props.color}>{props.text}</Note>
        </Container>
    )
}

Task.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    delete: PropTypes.func,
    color: PropTypes.string,
}

export default Task
