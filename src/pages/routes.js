import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Menus from './menus/menus'
import FirstChapter from './firstChapter/firstChapter'

export default class RouterMap extends Component{
    render () {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Menus} />
                        <Route path="/firstChapter" component={FirstChapter} />
                    </Switch>
                </div>
            </Router>
        )
    }
}