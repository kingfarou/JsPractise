addLoadEvent(createShowImageElement);

// 创建显示图片用的元素
function createShowImageElement(){
	// 检查浏览器对DOM函数的支持程度
	if(!document.getElementById) return;
	if(!document.getElementsByTagName) return;
	if(!document.createElement) return;
	if(!document.createTextNode) return;

	// 创建元素，用来显示所点击链接的图片及图片说明；
	// 为了能使用CSS文件里的样式，要设置id
	var image = document.createElement("img");
	image.setAttribute("id", "selectImg");
	var imageTitle = document.createElement("p");
	imageTitle.setAttribute("id", "selectImgTitle");

	// 装填元素
	var bodyTag = document.getElementsByTagName("body")[0]
	bodyTag.append(image);
	var imageTitleText = document.createTextNode("");
	imageTitle.appendChild(imageTitleText);
	bodyTag.append(imageTitle);

	setOnclickForATag();
}

/**
 * 给a标签设置点击事件
 */
function setOnclickForATag(){
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
 * @param {a} aTag a标签对象
 * @returns true：函数执行成功；false：函数执行异常
 */
function showImage(aTag){
	// 获取a标签的图片链接和title属性
	var imageLink = aTag.getAttribute("href");
	var title = aTag.getAttribute("title");
	
	// 将上述属性设置到目标元素里
	var image = document.getElementById("selectImg");
	var imageTitle = document.getElementById("selectImgTitle");
	
	image.setAttribute("src", imageLink);
	imageTitle.firstChild.nodeValue = title;

	return true;
}