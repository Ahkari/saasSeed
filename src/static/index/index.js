//dev tools
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
//react
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//project
import * as reducers from './reducers'
import {
    App,
    Home,
    Purchase,
    Order ,
    ReturnOrder ,
    Account ,
    ChargeAccount ,
    CheckAccount ,
    Supplier ,
    User ,
} from './components'

//dev tools
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
)

//combine Reducers with RouterReducer
const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
})
//createStore
const store = createStore(
    reducer,
    DevTools.instrument()
)

//hash history sync to store
const history = syncHistoryWithStore(hashHistory, store) ;


// Home
// Purchase
// -- Order
// -- ReturnOrder
// Market
// Account
// -- ChargeAccount
// -- CheckAccount
// -- -- User
// -- -- Supplier
// Statistics
// Settings

ReactDOM.render(

    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="purchase" component={Purchase} >
                        <Route path="order" component={Order} />
                        <Route path="returnOrder" component={ReturnOrder} />
                    </Route>
                    <Route path="account" component={Account} >
                        <Route path="chargeAccount" component={ChargeAccount} />
                        <Route path="checkAccount" component={CheckAccount} >
                            <Route path="user" component={User} />
                            <Route path="supplier" component={Supplier} />
                        </Route>
                    </Route>
                </Route>
            </Router>

            <DevTools />

        </div>
    </Provider>

    ,

    // $('#saas-entry')[0]
    document.getElementById( 'saas-entry' )

) ;
