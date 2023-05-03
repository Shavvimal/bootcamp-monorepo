// let mypromise = new Promise(func)

let burgerStock = 3

function orderBurger (name){
    console.log(`one burger for ${name} please`)
    return new Promise(makeBurger)
}

function makeBurger (resolve, reject){ 
    // those two are functions 
    if (burgerStock > 0) {  // do we have burger?
        // make burger 
        let burger = ['bun', 'patty', 'sauce', 'salad']
        burgerStock--
        resolve({burger})
    } else {
        reject({ excuse: "We're out of burgers..."})
    }   
}

//dont want as part of my chain of promises

function doWhileWaiting (activity){
    console.log("doing", activity)
}

// THis 'burger' object is produced at time of execution 

function eatBurger (order){
    console.log("Yummy Burger!")
    
}

function complain (response){
    console.log(`its not my fault that you're out of ${response.excuse}`)
    
}

// function dinnerOut(name) {
//     orderBurger(name)
//         .then(eatBurger)
//         .catch(complain)
//     doWhileWaiting("a sick TikTok dance")
// }

async function dinnerOut(name) {
    try {
        let resp = await orderBurger(name)
        eatBurger(resp)
    } catch (err) {
        complain(err)
    }
}


let queue = ["Beth", "Claire", "Claudia", "Shav"]

// queue.forEach(dinnerOut)

queue.forEach(name => {
    dinnerOut(name)
    doWhileWaiting("a sick dance for TikTok")
})

//call the function 
dinnerOut()

function getData(username) {
    fetch(`https://api.github.com/users/${username}`)
        // .then(data => console.log(data))
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
getData('getFutureproof');
async function getData2(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let json = await response.json();
        console.log(json);
    } catch (err) {
        console.log(err);
    }
}
function test () {
    getData2('getFutureProof');    
}