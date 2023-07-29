const http = require('http');
require('dotenv').config();



const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {

    switch(req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT":
            getPut(req, res);
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