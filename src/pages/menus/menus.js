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
                    <li><Link to="/secondChapter">第二节课面向对象编程</Link></li>
                    <li><Link to="/threeChapter">第三节课简单工厂模式</Link></li>
                    <li><Link to="/fourChapter">第四节课工厂方法模式</Link></li>
                    <li><Link to="/fiveChapter">第四节课工厂方法模式</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menus;
