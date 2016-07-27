import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../../actions/count'

function ChargeAccount({ number , increase, decrease }) {
    return (
        <div>
            welcome to Account/ChargeAccount Page !

            <div style={{ marginTop: '1.5em' }}>

                {number}

                <button onClick={() => increase(1)}>Increase</button>
                <button onClick={() => decrease(1)}>Decrease</button>
            </div>

        </div>
    )
}

export default connect(
    state => ({ number: state.count.number }),
    { increase, decrease }
)(ChargeAccount)
