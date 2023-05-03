const http = require('http'); 

const server = http.createServer(requestHandler);
let allCats = ["Zelda", "Minzy", "Bob"]


// request and response are objects
function requestHandler(request, response){
    console.log('method is', request.method)
    // console.log('The client says hello!', request.url); 
    //   if(request.url==="/cats"){
    //     response.end("Hello Cat Client")
    // } else if (request.url==="/dogs"){
    //     response.end("Hello Dog Client")
    // } else {
    //     statusCode = 404
    //     response.end(`We dont cter for ${request.url.slice(1)}`)
    // }
    
    let statusCode;
    let body;
    

    switch(request.url){
        case "/cats":
            if(request.method==='GET'){
                body = {cats: allCats}
            } else if(request.method==='DELETE') {
                allCats = [];
                statusCode = 204
            }
            break;
        case "/dogs":
            body = "Good Doggo";
            break; 
        default:
            statusCode = 404
            body = `we dont cater for ${request.url.slice(1)}`;
    }

  
    response.statusCode = statusCode || 200;
    response.end(JSON.stringify(body))

}

function startServer() {
    server.listen(5000, 'localhost', () => console.log('server listening on port 5000'))
    // default to local host 5000 
    // port is doorway into that 
    // listening means it is waiting for somone to ping it 
}

// startServer()
// we want to control when we do and dont start the serer so we dont do this 
// useful when we start a server 

module.exports = startServer



// curl -i -X "GET" http://localhost:5000/cats
// This gives all the information you need. It shows the status code and also -X allows us to edit the method