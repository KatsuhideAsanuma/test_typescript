import * as http from 'http';
const port=5000;
const server=http.createServer(
    (req,res)=>{
        res.end("this is a typescript server.")
    }
);
server.listen(port);
console.log(`open http://localhost:${port}`)