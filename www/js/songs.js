document.addEventListener('DOMContentLoaded', function() {
  const playlist = [
      { title: 'Smells Like Teen Spirit', artist: 'Nirvana', src: 'songs/Nirvana - Smells Like Teen Spirit (Official Music Video).mp3', cover: 'img/albumcover.jpg' },
      { title: 'Diamonds', artist: 'Rihanna', src: 'songs/Rihanna - Diamonds.mp3', cover: 'img/albumcover.jpg' },
      { title: 'Sephia', artist: 'Sheila On 7', src: 'songs/Sheila On 7 - Sephia.mp3', cover: 'img/albumcover.jpg' }
  ];

  const audioPlayer = document.getElementById('audioPlayer');
  const playlistContainer = document.querySelector('.playlist .list');
  const previewText = document.querySelector('.preview .text p');
  let currentSongIndex = 0;

  function loadPlaylist() {
      playlist.forEach((song, index) => {
          const item = document.createElement('div');
          item.classList.add('item');
          item.innerHTML = `
              <img src="${song.cover}" alt="${song.title}">
              <h4>${song.title}</h4>
              <p>${song.artist}</p>
              <div class="play" data-index="${index}"><span class="fa fa-play"></span></div>
          `;
          playlistContainer.appendChild(item);
      });

      document.querySelectorAll('.play').forEach(playButton => {
          playButton.addEventListener('click', function() {
              currentSongIndex = parseInt(this.dataset.index);
              playSong();
          });
      });
  }

  function playSong() {
      const song = playlist[currentSongIndex];
      audioPlayer.src = song.src;
      audioPlayer.classList.remove('d-none');
      audioPlayer.play();
      previewText.innerHTML = `${song.title} by ${song.artist}`;
  }

  document.getElementById('prevButton').addEventListener('click', function() {
      if (currentSongIndex > 0) {
          currentSongIndex--;
          playSong();
      }
  });

  document.getElementById('nextButton').addEventListener('click', function() {
      if (currentSongIndex < playlist.length - 1) {
          currentSongIndex++;
          playSong();
      }
  });

  loadPlaylist();
});
