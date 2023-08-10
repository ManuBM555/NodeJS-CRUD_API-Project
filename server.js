const http = require('http');
require('dotenv').config();
let movies = require('./data/movies.json');

const getReq = require('./methods/get-request');
const postReq = require('./methods/post-request');
const deleteReq = require('./methods/delete-request');
const putReq = require('./methods/put-request');



const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    req.movies = movies;
    switch(req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        default: 
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ title: "Not found", message: "Route not found"}));
        res.end();
        
    }




    
});

server.listen(port, () => {
    console.log(`Server started on port : ${port}`);
})