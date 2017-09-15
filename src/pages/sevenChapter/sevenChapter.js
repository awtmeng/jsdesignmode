import React, { Component } from 'react';

class SecondChapter extends Component {
    render() {
        return (
            <div className="chapter">
                <div className="chapter-header">
                    第七节课原型模式
                </div>
                <article>
                    <div>原型模式轮播图</div>
                    <div>
                        {
                            /*
                                // 图片轮播类
                                var LoopImages = function(imgArr, container){
                                    this.imagesArray = imgArr;
                                    this.container = container;
                                }

                                LoopImages.prototype = {
                                    //创建轮播图
                                    createImage: function(){
                                        console.log('...')
                                    },
                                    // 切换下一章图片
                                    changeImage: function(){
                                        console.log('...')
                                    }
                                }

                                //上下滑动切换类
                                var SlideLoopImg = function(imgArr, container){
                                    //构造函数继承图片轮播类
                                    LoopImages.call(this, imgArr, container)
                                }

                                SlideLoopImg.prototype = new LoopImages();
                                // 重写继承的切换下一张图片方法
                                SlideLoopImg.prototype.changeImage = function(){
                                    console.log('....');
                                }

                                // 渐隐切换
                                var FadeLoopImg = function(imgArr, container, arrow){
                                    LoopImages.call(this, imgArr, container);
                                    //切换尖头私有变量
                                    this.arrow = arrow;
                                }
                                FadeLoopImg.prototype = new LoopImages();
                                FadeLoopImg.prototype.changeImage = function(){
                                    console.log('')
                                }

                                //实例化一个渐隐切换图片类
                                var fadeImg = new FadeLoopImg([
                                    '01.jpg',
                                    '02.jpg',
                                    '03.jpg'
                                ],'slide', [
                                    'left.jpg',
                                    'right.jpg'
                                ])

                                fadeImg.changeImage()
                             */
                        }
                    </div>
                </article>
            </div>
        )
    }
}