import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../actions/count'
import { Link } from 'react-router'

function Purchase({ number, increase, decrease , children }) {
    return (
        <div>
            welcome to Purchase Page !

            {' '}

            <Link to="/purchase/order">order</Link>

            {' '}

            <Link to="/purchase/returnOrder">returnOrder</Link>

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
)(Purchase)
