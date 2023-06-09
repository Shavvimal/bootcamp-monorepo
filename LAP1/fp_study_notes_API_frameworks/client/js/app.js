// ********************************************
// CATS FLOW
// index
function getAllCats(){
    fetch('http://localhost:3000/cats')
        .then(r => r.json())
        .then(appendCats)
        .catch(console.warn)
};

// create
function submitCat(e){
    e.preventDefault();

    const catData = {
        name: e.target.name.value,
        age: e.target.age.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(catData),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('http://localhost:3000/cats', options)
        .then(r => r.json())
        .then(appendCat)
        .catch(console.warn)
};

// helpers
function appendCats(cats){
    cats.forEach(appendCat);
};

function appendCat(catData){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${catData.name} || Age: ${catData.age}`
    const catsList = document.querySelector('ul');
    catsList.append(newLi);
};

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    const msg = document.createElement('p');
    msg.textContent = msgText;
    msg.style.color = 'red';
    document.body.append(msg);
};

// ********************************************
function searchgiphy(e) {
    e.preventDefault(); //Stops page reloading
    console.log("Clicked")
    const APIkey = "HpcUur5hV9cdZ2qYv8leJeyCMimbVkPX"
    let query = e.target.inputGIF.value
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${query}&limit=1&rating=r&lang=en`
    console.log(url)
}


module.exports = {
    getAllCats,
    submitCat,
    appendCats,
    appendCat,
    getMessage,
    renderMessage,
    searchgiphy
}