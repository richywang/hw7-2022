var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#player1");
	console.log(video);
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});


