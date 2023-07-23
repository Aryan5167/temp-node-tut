const http=require('http')

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        // res.write('welcome to our home page')
        // res.end();
        res.end(`welcome to home page`)
    }
    else if(req.url==='/about'){
        // res.write("welcome to the about page")
        // res.end()
        res.end(`welcome to about page`)
     }

    else{res.end(`<p>Cant't find the page you are looking for</p>
    <h1>page Doesn't exist</h1>
    <a href="/">Back to Home</a>
    `) }
  
})

server.listen(5000)