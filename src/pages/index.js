import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import RouterMap from './routes'
import configure from './store/configureStore'
// import myhistory from './history'

// const store = configure({ config: global.$GLOBALCONFIG })
// const history = syncHistoryWithStore(myhistory, store)
// history.listen(location => console.log('location:', location))
// history.listen(function (location) { return location })

const history = createBrowserHistory()

ReactDOM.render(
    <Provider>
        <RouterMap></RouterMap>
    </Provider>,
    document.getElementById('root')
);
