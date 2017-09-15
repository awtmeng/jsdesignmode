import React, { Component } from 'react';

class SecondChapter extends Component {
    render() {
        return (
            <div className="chapter">
                <div className="chapter-header">
                    第三节课简单工厂模式
                </div>
                <article>
                    <div>1、如果类太多提供一个</div>
                    <div>
                        {
                            /*
                                var LoginAlert = function(text){
                                    this.content = text;
                                }
                                LoginAlert.prototype.show = function(){

                                }
                                var loginConfirm = function(text){
                                    this.content = text;
                                }

                                loginConfirm.prototype.show = function(){

                                }

                                var loginFailConfirm = new LoginConfirm('您输入的用户名不存在')

                                loginFailConfirm.show();

                                var LoginPrompt = function(text){
                                    this.content = text;
                                }
                                LoginPrompt.prototype.show = function(){

                                }

                                var PopFactory = function(name){
                                    switch(name) {
                                        case 'alert'
                                            return new LoginAlert();
                                        case 'confirm'
                                            return new LoginConfirm();
                                        case 'prompt'
                                            return new LoginPrompt();
                                    }
                                }
                             */
                        }
                    </div>
                </article>
            </div>
        )
    }
}