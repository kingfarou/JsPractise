addLoadEvent(createShowImageElement);

// 创建显示图片用的元素
function createShowImageElement(){
	// 检查浏览器对DOM函数的支持程度
	if(!document.getElementById) return;
	if(!document.getElementsByTagName) return;
	if(!document.createElement) return;
	if(!document.createTextNode) return;

	var bodyTag = document.getElementsByTagName("body")[0];

	// 实现滑动预览效果的元素
	var previewDiv = document.createElement("div");
	previewDiv.setAttribute("id", "previewDiv");
	previewDiv.style.width = 150 + "px";
	previewDiv.style.height = 120 + "px";

	var previewImg = document.createElement("img");
	previewImg.setAttribute("id", "previewImg");
	previewImg.setAttribute("src", "./images/thumbnail.png");
	previewImg.style.position = "absolute";
	previewImg.style.top = "0rem";
	previewImg.style.left = "0rem";
	previewImg.style.width = 600 + "px";
	previewImg.style.height = 120 + "px";
	previewDiv.append(previewImg);
	bodyTag.append(previewDiv);

	// 显示所点击链接的图片的元素，为了能使用CSS文件里的样式，要设置id
	var image = document.createElement("img");
	image.setAttribute("id", "selectImg");
	bodyTag.append(image);
	
	// 显示所点击链接的图片的说明的元素，为了能使用CSS文件里的样式，要设置id
	var imageTitle = document.createElement("p");
	imageTitle.setAttribute("id", "selectImgTitle");
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

	// 为每一个a标签设置事件
	for(var i = 0; i < size; i++){
		// 点击事件，切换图片
		aTags[i].onclick = function(){
			// 如果函数执行异常，不要拦截a标签点击事件的默认行为，保持平稳退化
			return !showImage(this);
		}
	}

	var previewImgWidth = parseInt(document.getElementById("previewImg").style.width);
	// 鼠标经过事件，启动动画
	aTags[0].onmouseover = function(){
		moveElement("previewImg", -previewImgWidth/4*0, 0, "1");
	}
	aTags[1].onmouseover = function(){
		moveElement("previewImg", -previewImgWidth/4*1, 0, "1");
	}
	aTags[2].onmouseover = function(){
		moveElement("previewImg", -previewImgWidth/4*2, 0, "1");
	}
	aTags[3].onmouseover = function(){
		moveElement("previewImg", -previewImgWidth/4*3, 0, "1");
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