function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}


function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayComments(data))
}



function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}

function displayComments(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        //console.log(user.name);
        const li = document.createElement('li');
        //li.innerText = user.name;
        li.innerText = `name:${user.name} email:${user.email}`;
        ul.appendChild(li);
    }
}