import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../../actions/count'

function Order() {
    return (
        <div>
            welcome to Purchase/Order Page !
        </div>
    )
}

export default connect(
    state => ({ }),
    { increase, decrease }
)(Order)
