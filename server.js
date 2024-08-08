//console.log('hello world')
//const os =require('os');

//console.log(os.type())
//console.log(os.version())
//console.log(os.homedir())

const http = require('http')
const server= http.createServer((req, res)=>{
    if(req.url==='/'){
    //res.write()
    res.end('welcome to our home page')
}
 else if(req.url==='/about'){
    res.end('here is our short history')
}else{
res.end(
    `<h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`
)}
})

server.listen(5000)
