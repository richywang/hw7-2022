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
	this.document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	const time = video.currentTime + 10;
	video.currentTime = time >= video.duration ? 0 : time;
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute"
	} else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute"
	}
	
});

document.querySelector("#slider").addEventListener("change", function() {
	const volume = document.querySelector("#slider").value;
	document.querySelector("#volume").textContent = volume + "%";
	video.volume = volume / 100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
