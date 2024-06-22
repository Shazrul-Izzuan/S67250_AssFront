document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResultsContainer = document.querySelector('.search-results .list');
    const audioPlayer = document.getElementById('audioPlayer');
    const previewText = document.querySelector('.preview .text p');

    // Sample data to simulate a song database
    const songDatabase = [
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana', src: 'songs/Nirvana - Smells Like Teen Spirit (Official Music Video).mp3', cover: 'img/albumcover.jpg' },
        { title: 'Diamonds', artist: 'Rihanna', src: 'songs/Rihanna - Diamonds.mp3', cover: 'img/albumcover.jpg' },
        { title: 'Sephia', artist: 'Sheila On 7', src: 'songs/Sheila On 7 - Sephia.mp3', cover: 'img/albumcover.jpg' }
    ];

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        searchResultsContainer.innerHTML = '';

        const results = songDatabase.filter(song => 
            song.title.toLowerCase().includes(query) || 
            song.artist.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            results.forEach(song => {
                const item = document.createElement('div');
                item.classList.add('item', 'col-md-4', 'p-2'); // Ensure consistent size
                item.innerHTML = `
                    <div class="card">
                        <img src="${song.cover}" class="card-img-top" alt="${song.title}">
                        <div class="card-body">
                            <h5 class="card-title">${song.title}</h5>
                            <p class="card-text">${song.artist}</p>
                            <button class="btn btn-primary play" data-src="${song.src}"><span class="fa fa-play"></span> Play</button>
                        </div>
                    </div>
                `;
                searchResultsContainer.appendChild(item);
            });

            document.querySelectorAll('.play').forEach(playButton => {
                playButton.addEventListener('click', function() {
                    const src = this.dataset.src;
                    playSong(src, this.closest('.card-body').querySelector('.card-title').innerText);
                });
            });
        } else {
            searchResultsContainer.innerHTML = '<p>No results found</p>';
        }
    });

    function playSong(src, title) {
        audioPlayer.src = src;
        audioPlayer.classList.remove('d-none');
        audioPlayer.play();
        previewText.innerHTML = `Playing ${title}`;
    }
});
