import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../../../actions/count'

function Supplier() {
    return (
        <div>
            welcome to Account/CheckAccount/Supplier Page !
        </div>
    )
}

export default connect(
    state => ({ }),
    { increase, decrease }
)(Supplier)
