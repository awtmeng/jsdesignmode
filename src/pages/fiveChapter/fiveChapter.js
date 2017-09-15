import React, { Component } from 'react';

class SecondChapter extends Component {
    render() {
        return (
            <div className="chapter">
                <div className="chapter-header">
                    第五节课抽象工厂模式
                </div>
                <article>
                    <h4>抽象工厂模式</h4>
                    <div>
                        {
                            /*
                                // 抽象工厂方法
                                var VehicleFactory = function(subType, superType){
                                    // 判断抽象工厂中是否有该抽象类
                                    if(typeof VehicleFactory[superType] === 'function') {
                                        //缓存类
                                        function F() {};
                                        // 继承父类属性和方法
                                        F.prototype = new VehicleFactory[superType]();
                                        // 将子类constructor指向子类
                                        subType.constructor = subType;
                                        // 子类原型继承"父类"
                                        subType.prototype = new F();
                                    }else {
                                        throw new Error('未创建该抽象类')
                                    }
                                }

                                // 小汽车抽象类
                                VehicleFactory.Car = function() {
                                    this.type = 'car';
                                }

                                VehicleFactory.Car.prototype = {
                                    getPrice: function(){
                                        return new Error('抽象方法不能调用')
                                    },
                                    getSpeed: function(){
                                        return new Error('抽象方法不能调用')
                                    }
                                }

                                // 公交车抽象类
                                VehicleFactory.Bus = function() {
                                    this.type = 'Bus';
                                }

                                VehicleFactory.Bus.prototype = {
                                    getPrice: function(){
                                        return new Error('抽象方法不能调用')
                                    },
                                    getSpeed: function(){
                                        return new Error('抽象方法不能调用')
                                    }
                                }

                                // 货车抽象类
                                VehicleFactory.Truck = function() {
                                    this.type = 'Truck';
                                }

                                VehicleFactory.Truck.prototype = {
                                    getPrice: function(){
                                        return new Error('抽象方法不能调用')
                                    },
                                    getSpeed: function(){
                                        return new Error('抽象方法不能调用')
                                    }
                                }

                                // 抽象类的实现
                                // 宝马汽车子类

                                var BMW = function(price, speed){
                                    this.price = price;
                                    this.speed = speed;
                                }

                                VehicleFactory(BMW, 'Car');
                                BMW.prototype.getPrice = function(){
                                    return this.price;
                                }
                                BMW.prototype.getSpeed = function(){
                                    return this.speed;
                                }

                                // 公共汽车子类

                                var YUTONG = function(price, speed){
                                    this.price = price;
                                    this.speed = speed;
                                }

                                VehicleFactory(YUTONG, 'Bus');
                                YUTONG.prototype.getPrice = function(){
                                    return this.price;
                                }
                                YUTONG.prototype.getSpeed = function(){
                                    return this.speed;
                                }

                                var car = new BMW(10000, 1000);
                                console.log(car.getPrice()) // 10000
                                console.log(car.type) // car
                             */
                        }
                    </div>
                </article>
            </div>
        )
    }
}