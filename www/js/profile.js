document.addEventListener('DOMContentLoaded', function() {
    const recentlyPlayed = [
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana', src: 'songs/Nirvana - Smells Like Teen Spirit (Official Music Video).mp3', cover: 'img/albumcover.jpg' },
        { title: 'Diamonds', artist: 'Rihanna', src: 'songs/Rihanna - Diamonds.mp3', cover: 'img/albumcover.jpg' },
        { title: 'Sephia', artist: 'Sheila On 7', src: 'songs/Sheila On 7 - Sephia.mp3', cover: 'img/albumcover.jpg' }
    ];

    const playlistContainer = document.querySelector('.user-playlists .list');
    const audioPlayer = document.getElementById('audioPlayer');
    const previewText = document.querySelector('.preview .text p');

    function loadRecentlyPlayed() {
        recentlyPlayed.forEach((song, index) => {
            const item = document.createElement('div');
            item.classList.add('item', 'col-md-3', 'p-2'); // Adjust the size of each item
            item.innerHTML = `
                <div class="card">
                    <img src="${song.cover}" class="card-img-top" alt="${song.title}">
                    <div class="card-body">
                        <h5 class="card-title">${song.title}</h5>
                        <p class="card-text">${song.artist}</p>
                        <button class="btn btn-primary play" data-index="${index}"><span class="fa fa-play"></span> Play</button>
                    </div>
                </div>
            `;
            playlistContainer.appendChild(item);
        });

        document.querySelectorAll('.play').forEach(playButton => {
            playButton.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                playSong(recentlyPlayed[index]);
            });
        });
    }

    function playSong(song) {
        audioPlayer.src = song.src;
        audioPlayer.classList.remove('d-none');
        audioPlayer.play();
        previewText.innerHTML = `Playing ${song.title}`;
    }

    loadRecentlyPlayed();
});
