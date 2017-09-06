import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './menus.styl';

class Menus extends Component {
    render() {
        return (
            <div className="Menus">
                <div className="Menus-header">
                    javascript设计模式学习笔记
                </div>
                <ul>
                    <li><Link to="/firstChapter">第一节课灵魂的语言</Link> </li>
                </ul>
            </div>
        );
    }
}

export default Menus;
