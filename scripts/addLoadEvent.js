/**
 * 添加window.onload事件的函数
 * @param {function} func 要添加的事件对象
 */
function addLoadEvent(func){
    if(typeof window.onload != 'function'){
        window.onload = func;
    } else {
        var oldFuction = window.onload;
        window.onload = function(){
            oldFuction();
            func();
        }
    }
}