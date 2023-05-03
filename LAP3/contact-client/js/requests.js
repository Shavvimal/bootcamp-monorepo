const postsList = document.querySelector('#posts');


getAllPosts();
function getAllPosts(){
    fetch('/api/*')
        .then(r => r.json())
        .then(appendposts)
        .catch(console.warn)
};

// helpers

function appendposts(data){
    data.posts.forEach(appendpost);
};

function appendpost(post) {
    let div = document.createElement("div")
    const titleE = document.createElement('h1');
    const nameE = document.createElement('h3');
    const storyE = document.createElement('p');

    titleE.textContent = post.name
    nameE.textContent = post.email
    storyE.textContent = post.message

    div.append(titleE)
    div.append(nameE)
    div.append(storyE)

    postsList.append(div);
};

