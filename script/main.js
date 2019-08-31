window.onload = setOnclickForATag;

/**
 * 给a标签设置点击事件
 */
function setOnclickForATag(){
	// 检查浏览器对DOM函数的支持程度
	if(!document.getElementById) return;
	if(!document.getElementsByTagName) return;

	var aTags = document.getElementById("imageList").getElementsByTagName("a");
	var size = aTags.length;
	if(size == 0) return;

	// 为每一个a标签设置点击事件
	for(var i = 0; i < size; i++){
		aTags[i].onclick = function(){
			// 如果函数执行异常，不要拦截a标签点击事件的默认行为，保持平稳退化
			return !showImage(this);
		}
	}
}

/**
 * 显示来自a标签的图片
 * @param {a} aTag 
 * @returns true：函数执行成功；false：函数执行异常
 */
function showImage(aTag){
	// 检查浏览器对DOM函数的支持程度
	if(!document.getElementById) return false;

	// 获取a标签的图片链接和title属性
	var imageLink = aTag.getAttribute("href");
	var title = aTag.getAttribute("title");
	
	// 将上述属性设置到目标元素里
	var image = document.getElementById("image");
	var imageTitle = document.getElementById("imageTitle");
	
	image.setAttribute("src", imageLink);
	imageTitle.innerHTML = title;

	return true;
}