import React, { Component } from 'react';

class SecondChapter extends Component {
    render() {
        return (
            <div className="chapter">
                <div className="chapter-header">
                    第二节课面向对象编程
                </div>
                <article>
                    <h4>1、封装</h4>
                    <div>
                        创建类的几种方法，一般首字母大写
                    </div>
                    <div>(1)第一种</div>
                    <div>
                        {
                            /*
                                var Book = function(id, bookname, price){
                                    this.id = id;
                                    this.bookname = bookname;
                                    this.price = price;
                                }
                             */
                        }
                    </div>
                    <div>(2)第二种</div>
                    <div>
                        {
                            /*
                                var Book = function(){}
                                Book.prototype.display = function(){}

                                var Book = function(){}
                                Book.prototype = {
                                    display: function(){}
                                }
                             */
                        }
                    </div>
                    <div>通过this添加的属性和方法，与在prototype中添加的属性和方法的区别：通过this添加是在当前对象上添加，每次创建一个对象，都会重新创建一次；而通过prototype继承方法并不是对象自身的，每次创建一个新对象，不会再次创建</div>
                    <div>constructor介绍：当创建一个函数或者对象时，都会为其创建一个原型对象prototype，在prototype对象中又会像函数中创建this一样创建一个constructor属性，那么constructor属性指向的就是拥有整个原型对象的函数或者对象，例如，在Book prototype中的constructor属性指向的就是Book类对象</div>
                    <div>需要注意，构造函数实例化需要用new关键字</div>
                    <div>
                        {
                            /*
                                var Book = function(title, time, type){
                                    this.title = title;
                                    this.time = time;
                                    this.type = type;
                                }

                                var book = Book('javascript', '2014', 'js')

                                console.log(book); //undefined;
                                console.log(window.title) //javascript
                             */
                        }
                    </div>
                    <div>安全模式</div>
                    <div>
                        {
                            /*
                                var Book = function(title, time, type){
                                    if(this instanceof Book) {
                                        this.title = title;
                                        this.time = time;
                                        this.type = type;
                                    }else {
                                        return new Book(title, time, type)
                                    }
                                }

                                var book = Book('javascript', '2014', 'js')
                             */
                        }
                    </div>
                    <div>instanceof 通过判断对象的prototype链来确定这个对象是否是某个类的实例</div>
                    <h4>类式继承</h4>
                    <div>
                        {
                            /*
                                // 声明父类
                                function SuperClass() {
                                    this.superValue = true;
                                    this.books = ['javascript', 'html', 'css']
                                }
                                // 为父类添加共有方法
                                SuperClass.prototype.getSuperValue = function() {
                                    return this.superValue;
                                }
                                //声明子类
                                function SubClass() {
                                    this.subValue = false;
                                }
                                // 继承父类
                                SubClass.prototype = new SuperClass();
                                // 为子类添加共有方法
                                SubClass.prototype.getSubValue = function() {
                                    return this.subValue;
                                }

                                var instance = new SubClass();

                                console.log(instance instanceof SuperClass) // true
                                console.log(instance instanceof SubClass) //true
                                console.log(SubClass instanceof SuperClass) //fasle

                                var instance1 = new SubClass();
                                var instance2 = new SubClass();

                                console.log(instance2.books) // ['javascript', 'html', 'css']
                                instance1.books.push('designmode');
                                console.log(instance2.books) // ['javascript', 'html', 'css', 'designmode']

                            */
                        }
                    </div>
                    <div>
                        类式继承的缺点：
                        1、通过子类的prototype继承父类（SubClass.prototype继承SuperClass）,修改instance1就会影响instance2的内容；
                        2、无法向父类传递参数
                    </div>
                    <h4>构造函数继承</h4>
                    <div>
                        {
                            /*
                                //声明父类
                                function SuperClass(id) {
                                    this.books = ['javascript', 'html', 'css'];
                                    this.id = id;
                                }

                                SuperClass.prototype.showBooks = function(){
                                    console.log(this.books)
                                }

                                // 声明子类
                                function SubClass(id) {
                                    SuperClass.call(this, id);
                                }

                                // 继承父类
                                SubClass.prototype = new SuperClass();

                                var instance1 = new SubClass(10);
                                var instance2 = new SubClass(11);

                                instance1.books.push('designmode')

                                console.log(instance1.books) // ['javascript', 'html', 'css', 'designmode']
                                console.log(instance2.books) // ['javascript', 'html', 'css']
                                instance1.showBooks() // TypeError
                            */
                        }
                    </div>
                    <div>通过SuperClass.call(this, id);将子类中的变量在父类中执行一遍，由于父类中是给this绑定的属性，缺点，父类原型中的方法不会被子类继承</div>
                    <h4>组合继承</h4>
                    <div>
                        {
                            /*
                                //声明父类
                                function SuperClass(id) {
                                    this.books = ['javascript', 'html', 'css'];
                                    this.id = id;
                                }

                                SuperClass.prototype.showBooks = function(){
                                    console.log(this.books)
                                }

                                // 声明子类
                                function SubClass(id) {
                                    SuperClass.call(this, id);
                                }

                                // 为子类添加共有方法
                                SubClass.prototype.getSubValue = function() {
                                    return this.subValue;
                                }
                           */
                        }
                    </div>
                    <div>原型继承</div>
                    <div>
                        {
                            /*
                                function inheritObject(o) {
                                    // 声明一个过渡函数对象
                                    function F() {}
                                    // 过渡对象的原型继承父对象
                                    F.prototype = o;
                                    // 返回过渡对象的一个实例，改实例的原型继承了父对象
                                    return new F()
                                }
                             */
                        }
                    </div>
                    <div>组合寄生继承</div>
                    <div>
                        {
                            /*
                                function inheritPrototype(subClass, superClass) {
                                    // 复制一份父类原型副本保存在变量中
                                    var p = inheritObject(superClass.prototype);
                                    // 修正因为重写子类原型导致子类的constructor属性被修改
                                    p.constructor = subClass;
                                    // 设置子类原型
                                    subClass.prototype = p;`
                                }
                            */
                        }
                    </div>
                </article>
            </div>
        );
    }
}

export default SecondChapter;
