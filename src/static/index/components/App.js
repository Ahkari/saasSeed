import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
    return (
        <div>
            <header>
                SAAS seed:
                {' '}
                <Link to="/">Home</Link>
                {' '}
                <Link to="/purchase">purchase</Link>
                {' '}
                <Link to="/account">account</Link>
            </header>

            <div style={{ marginTop: '1.5em' }}>

                {children}

            </div>
        </div>
    )
}
