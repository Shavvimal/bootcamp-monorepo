// ********************************************
// SETUP
const btn = document.querySelector('button');
const form = document.querySelector('#new-cat-form');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitCat);

// Fetch all cats as soon as app is loaded
getAllCats();
// ********************************************

            // Setup 
            const formgif = document.querySelector('#add-gif-form');

            // Bind Event Listeners
            formgif.addEventListener('submit', searchgiphy);
            