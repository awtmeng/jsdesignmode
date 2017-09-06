import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <Link to="/menus">目录</Link>
                </div>
            </div>
        );
    }
}

export default Main;
