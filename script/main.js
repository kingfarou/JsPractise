function changeImage(aTag){
	var imageLink = aTag.getAttribute("href");
	var title = aTag.getAttribute("title");
	
	var imageTag = document.getElementById("imageTag");
	var imageTitle = document.getElementById("imageTitle");
	
	imageTag.setAttribute("src", imageLink);
	imageTitle.innerHTML = title;
}