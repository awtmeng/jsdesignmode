import React, { Component } from 'react';

class SecondChapter extends Component {
    render() {
        return (
            <div className="chapter">
                <div className="chapter-header">
                    第六节课建造者模式
                </div>
                <article>
                    <h4>建造者模式</h4>
                    <div>
                        {
                            /*
                                // 创建一位人类
                                var Human = function(param){
                                    //技能
                                    this.skill = param && param.skill || '保密';
                                    this.hobby = param && param.hobby || '保密';
                                }

                                // 类人原型的方法
                                Human.prototype = {
                                    getSkill: function() {
                                        return this.skill;
                                    },
                                    getHobby: function(){
                                        return this.hobby;
                                    }
                                }

                                // 实例化姓名类
                                var Named = function(name){
                                    var that = this;
                                    //构造器
                                    //构造函数解析姓名的姓与名
                                    (function(name, that){
                                        that.wholeName = name;
                                        if(name.indexOf(' ') > -1){
                                            that.FirstName = name.slice(0, name.indexOf(' '));
                                            that.secondName = name.slice(name.indexOf(' '));
                                        }
                                    }(name, that))
                                }

                                // 实例化职位类
                                var Work = function(work) {
                                    var that = this;
                                    //构造器
                                    // 构造函数中通过传入的职位特征来设置相应职位以及描述
                                    (function(work, that){
                                        switch(work) {
                                            case 'code':
                                                that.work = '工程师';
                                                that.workDescript = '每天沉醉于编程';
                                                break;
                                            case 'UI':
                                            case 'UE':
                                                that.work = '设计师';
                                                that.workDescript = '设计更是一种艺术';
                                            case 'teach':
                                                that.work = '教师';
                                                that.workDescript = '分享也是一种快乐';
                                            default:
                                                that.work = work;
                                                that.workDescript = '无'
                                        }
                                    }(work, that))
                                }

                                // 更换期望的职位
                                Work.prototype.changeWork = function(work){
                                    this.work = work;
                                }

                                //添加对职位的描述
                                Work.prototype.changeDescript = function(setence){
                                    this.workDescript = setence;
                                }

                                // 应聘者建造者
                                // 参数 name: 姓名
                                // 参数 work: 期望职位
                                var Person = function(name, work){
                                    //创建应聘者缓存对象
                                    var _person = new Human();

                                    // 创建应聘者姓名解析对象
                                    _person.name = new Named(name);

                                    // 创建应聘者期望职位
                                    _person.work = new Work(work);

                                    // 将创建的应聘者对象返回
                                    return _person
                                }

                                var person = new Person('xiao ming', 'code');
                             */
                        }
                    </div>
                </article>
            </div>
        )
    }
}