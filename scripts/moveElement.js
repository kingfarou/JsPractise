/**
 * 将元素放置到指定位置
 * 
 * @param {string} elementId 要放置的元素id
 * @param {int} destinationX 指定位置的x轴坐标，单位：px
 * @param {int} destinationY 指定位置的y轴坐标，单位：px
 */
function positionElement(elementId, destinationX, destinationY){
    var element = document.getElementById(elementId);
    if(!element){
        return;
    }

    element.style.position = "absolute";
    element.style.left = destinationX + "px";
    element.style.top = destinationY + "px";
}

/**
 * 平移（通过动画）元素到指定位置
 * 
 * @param {string} elementId 要移动的元素id
 * @param {int} destinationX 指定位置的x轴坐标，单位：px
 * @param {int} destinationY 指定位置的y轴坐标，单位：px
 * @param {int} intervalTime 间隔时间，不是动画的总时长，这是“每动一下”的时间，单位：毫秒
 */
function moveElement(elementId, destinationX, destinationY, intervalTime){
    if(!elementId){
        return;
    }
    
    var element = document.getElementById(elementId);
    if(element.timer){
        clearTimeout(element.timer);
    }

    var currentX = parseInt(element.style.left);
    var currentY = parseInt(element.style.top);
    if(currentX == destinationX && currentY == destinationY){
        return;
    }

    // 目标位置在元素初始位置右边
    if(currentX < destinationX){
        currentX += 1;
    }
    // 目标位置在元素初始位置左边
    if(currentX > destinationX){
        currentX -= 1;
    }
    // 目标位置在元素初始位置下边
    if(currentY < destinationY){
        currentY += 1;
    }
    // 目标位置在元素初始位置上边
    if(currentY > destinationY){
        currentY -= 1;
    }
    // 移动
    element.style.left = currentX + "px";
    element.style.top = currentY + "px";

    // 递归实现动画
    var statement = "moveElement(" + "'" + elementId + "'," + destinationX + "," + destinationY + "," + intervalTime + ")";
    element.timer = setTimeout(statement, intervalTime);
}