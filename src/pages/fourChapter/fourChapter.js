import React, { Component } from 'react';

class SecondChapter extends Component {
    render() {
        return (
            <div className="chapter">
                <div className="chapter-header">
                    第四节课工厂方法模式
                </div>
                <article>
                    <h4>安全模式创建的工厂类</h4>
                    <div>
                        {
                            /*
                                // 安全模式创建的工厂类
                                var Factory = function(type, content){
                                    if(this instanceof Factory){
                                        var s = new this[type](content);
                                        return s;
                                    }else {
                                        return new Factory(type, content)
                                    }
                                }

                                // 工厂原型中设置创建所有类型数据对象的基类
                                Factory.prototype = {
                                    Java: function(content){
                                        this.content = content;
                                        (function(content){
                                            var div = document.createElement('div');
                                            div.innerHTML = content;
                                            div.style.border = '1px solid red';
                                            document.getElementById('container').appendChild(div);
                                        }(content))
                                    },
                                    JavaScript: function(content){
                                        // ...
                                    }
                                    ....
                                }

                                //调用

                                var data = [
                                    {type: 'Java', content: 'Java...'}
                                ]
                             */
                        }
                    </div>
                </article>
            </div>
        )
    }
}