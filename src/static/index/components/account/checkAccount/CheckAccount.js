import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../../actions/count'
import { Link } from 'react-router'

function CheckAccount({children}) {
    return (
        <div>
            welcome to Account/CheckAccount Page !

            {' '}

            <Link to="/account/checkAccount/user">user</Link>

            {' '}

            <Link to="/account/checkAccount/supplier">supplier</Link>

            <div style={{ marginTop: '1.5em' }}>

                {children}

            </div>

        </div>
    )
}

export default connect(
    state => ({ }),
    { increase, decrease }
)(CheckAccount)
