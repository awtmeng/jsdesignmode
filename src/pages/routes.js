import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Menus from './menus/menus'
import FirstChapter from './firstChapter/firstChapter'
import SecondChapter from './secondChapter/secondChapter'
import ThreeChapter from './threeChapter/threeChapter'
import FourChapter from './fourChapter/fourChapter'
import FiveChapter from './fiveChapter/fiveChapter'

export default class RouterMap extends Component{
    render () {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Menus} />
                        <Route path="/firstChapter" component={FirstChapter} />
                        <Route path="/secondChapter" component={SecondChapter} />
                        <Route path="/threeChapter" component={ThreeChapter} />
                        <Route path="/fourChapter" component={FourChapter} />
                        <Route path="/fiveChapter" component={FiveChapter} />
                    </Switch>
                </div>
            </Router>
        )
    }
}