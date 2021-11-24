function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => displayAlbum(data))
};

loadAlbums();

function displayAlbum(albums) {
    const albumContainer = document.getElementById("albums");
    for (const album of albums) {

        const div = document.createElement("div");
        div.classList.add('album');
        div.innerHTML = `
        <h4>${album.id}</h4>
        <p>${album.title}</p>
        `
        albumContainer.appendChild(div);
        console.log(album);
    }
}