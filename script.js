const music = document.getElementById("music");
const button = document.getElementById("unmuteBtn");

button.addEventListener("click", () => {
  music.play();
  button.innerText = "Playing ❤️";
  button.disabled = true;
});
