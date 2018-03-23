var link = document.getElementById('link');

/*
* window.onscroll：浏览器滚动条滚动事件（只要滚动条滚动了，就会触发这个事件）
* 1、鼠标滚动控制 或者手动拖动滚动条
* 2、键盘按键控制
* 3、使用JS代码控制
* ...
* 不管什么方式，只要滚动条动了就会触发这个事件
* */

~function(){
    window.onscroll = function () {
        //=>获取当前卷去的高度和一屏幕高度
        var curScrollTop = utils.win('scrollTop'),
            curClientHeight = utils.win('clientHeight');
        //=>已经卷去的高度大于等于一屏幕高度的时候，展示回到顶部按钮，否则隐藏按钮即可
        if(curScrollTop >= curClientHeight){
            utils.css(link,'display','block');
        }else{
            utils.css(link,'display','none');
        }
        utils.css(link,'display',curScrollTop >= curClientHeight ? 'block' : 'none');
    };
    link.onclick = function () {
        //让浏览器的scrollTop为0
        utils.win('scrollTop',0);
    };
}();


