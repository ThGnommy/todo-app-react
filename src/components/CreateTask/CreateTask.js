import React from 'react'
import PropTypes from 'prop-types'
import { Container, Input, Create } from '../../styled-comp'

const CreateTask = props => {


    return (
        <Container>
            <Input autoComplete='off' id='input-task' display={props.display} />
            <Create display={props.display} onClick={props.onClick}>Create</Create>
        </Container>
    )
}

CreateTask.propTypes = {
    display: PropTypes.string,
    onClick: PropTypes.func
}

export default CreateTask