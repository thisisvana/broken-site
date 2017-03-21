function changeCol(col){
document.getElementsByTagName("body")[0].style.background = col;
}

var incr = 0;
var imageArray = ['cat', 'dog', 'mouse'];

function changePhoto() {
	console.log(incr);
	incr++;
	if(incr > imageArray.length - 1){
		incr = 0;
	}
	document.getElementById("slider").src = "img/" + imageArray[incr] + ".png";
}

(function() {
	var timer = setInterval(changePhoto, 1000);
})();

