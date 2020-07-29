import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../styled-comp'

export const NewTask = (props) => {

    return (
        <Button onClick={props.onClick}>{props.symbol} New Task from new branch</Button>
    )
}

NewTask.propTypes = {
    onClick: PropTypes.func,
    symbol: PropTypes.string
}

export default NewTask