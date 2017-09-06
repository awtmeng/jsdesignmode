import React from 'react'
import {
    Route,
    IndexRoute
} from 'react-router'
import Main from './pages/index'

const routes = (
    <Route>
        <Route path="/" component={Main} />
    </Route>
);

export default routes