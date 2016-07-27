import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../actions/count'
import { Link } from 'react-router'

function Account({ children }) {
    return (
        <div>
            welcome to Account Page !

            {' '}

            <Link to="/account/chargeAccount">chargeAccount</Link>

            {' '}

            <Link to="/account/checkAccount">checkAccount</Link>

            <br/>

            <div style={{ marginTop: '1.5em' }}>

                {children}

            </div>

        </div>
    )
}

export default connect(
    state => ({ number: state.count.number }),
    { increase, decrease }
)(Account)
