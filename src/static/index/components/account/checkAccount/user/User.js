import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../../../actions/count'

function User() {
    return (
        <div>
            welcome to Account/CheckAccount/User Page !
        </div>
    )
}

export default connect(
    state => ({ }),
    { increase, decrease }
)(User)
