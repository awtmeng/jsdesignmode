import React, { Component } from 'react';

class FirstChapter extends Component {
    render() {
        return (
            <div className="chapter">
                <div className="chapter-header">
                    第一节课灵魂的语言
                </div>
                <article>
                    <h4>1、创建类</h4>
                    <div>
                        {
                            /*
                            var CheckObject = function() {
                                this.checkName = function () {
                                    // 验证姓名
                                }
                                this.checkEmail = function () {
                                    // 验证邮箱
                                }
                                this.checkPassword = function () {
                                    // 验证密码
                                }
                            }

                            var a = new CheckObject();
                            a.checkEmail();
                            */
                        }
                    </div>
                    <div>
                        把所有的方法都放在函数内部，通过this定义，每次通过new关键字创建对象的时候，新创建的对象都会对类的this属性进行复制，所以这些新创建的对象都有自己的一套方法，很消耗内存，解决办法；
                    </div>
                    <div>
                        {
                            /*
                            var CheckObject = function() {};
                            CheckObject.prototype = {
                                checkName: function(){
                                    // 验证姓名
                                },
                                checkEmail: function() {
                                    // 验证邮箱
                                },
                                checkPassword: function() {
                                    // 验证密码
                                }
                            }
                            var a = new CheckObject();
                            a.checkName()
                            */
                        }
                    </div>
                    <div>
                        这样创建出来的对象所拥有的方法就是同一个了，因为他们都要依赖prototype原型依次寻找，而找到的方法都是同一个，都绑定在CheckObject对象的原型上，修改以上代码改为链式调用
                    </div>
                    <h4>2、链式调用</h4>
                    <div>
                        {
                            /*
                            var CheckObject = function() {};
                            CheckObject.prototype = {
                                checkName: function(){
                                    // 验证姓名
                                    return this;
                                },
                                checkEmail: function() {
                                    // 验证邮箱
                                    return this;
                                },
                                checkPassword: function() {
                                    // 验证密码
                                    return this;
                                }
                            }
                            var a = new CheckObject();
                            a.checkName().checkEmail().checkPassword()
                            */
                        }
                    </div>
                    <div>给Function对象原型添加addMethod方法，实现链式添加</div>
                    <div>
                        {
                            /*
                            Function.prototype.addMethod = function(name, fn){
                                this[name] = fn;
                                return this;
                            }

                            var methods = function() {};

                            methods.addMethod('checkName', function(){
                                //
                                return this;
                            }).addMethod('checkEmail', function(){
                                //
                                return this;
                            })
                             */
                        }
                    </div>
                    <div>以上方法是函数式调用方式，改成类式调用如下：</div>
                    <div>
                        {
                            /*
                            Function.prototype.addMethod = function(name, fn){
                                this.prototype[name] = fn;
                            }

                            var methods = function() {};

                            methods.addMethod('checkName', function(){
                                //
                            }).addMethod('checkEmail', function(){
                                //
                            })

                            var m = new Methods()
                            m.checkEmail()
                             */
                        }
                    </div>
                    <div>改成类调用之后，就不能直接使用了，要通过new关键字创建新的对象</div>
                </article>
            </div>
        );
    }
}

export default FirstChapter;
