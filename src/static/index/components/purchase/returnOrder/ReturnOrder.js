import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../../actions/count'

function ReturnOrder() {
    return (
        <div>
            welcome to Purchase/ReturnOrder Page !
        </div>
    )
}

export default connect(
    state => ({}),
    { increase, decrease }
)(ReturnOrder)
