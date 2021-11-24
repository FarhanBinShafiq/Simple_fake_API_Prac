function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
};

loadComment();

function displayComments(comments) {
    const commentContainer = document.getElementById('comments');
    for (const comment of comments) {

        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Display Comment</h3>
        <p>New Comment</p>
        `
        commentContainer.appendChild(div);
        console.log(comment);
    }
}