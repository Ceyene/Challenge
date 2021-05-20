const video = document.getElementById("video");
const videoButton = document.getElementById("video_button");
const buttonIcon = document.getElementById("button_icon");
const videoTime = document.getElementById("video_time");

videoButton.addEventListener("click", () => {
  //First, validates if video is playing or not
  if (video.paused) {
    //If it´s not, then play video and change the button icon to "pause"
    buttonIcon.src = "Assets/pause.svg";
    video.play();
  } else {
    //If it´s playing, then pause it and change the button icon to "play"
    buttonIcon.src = "Assets/play.svg";
    video.pause();
  }

  //And we get the time of the video to show it on the screen
  setInterval(() => {
    videoTime.innerHTML =
      video.currentTime.toFixed(2) + " / " + video.duration.toFixed(2);
  }, 100);

  //Finally, when video reaches its end, we change the button icon to "play"
  video.onended = () => {
    buttonIcon.src = "Assets/play.svg";
  };
});
