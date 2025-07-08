document.body.addEventListener('click', () => {
  const audio = document.getElementById('birthdaySong');
  if (audio) {
    audio.play();
  }
});