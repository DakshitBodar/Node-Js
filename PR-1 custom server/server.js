let http = require('http');
let fs = require('fs');

const server = http.createServer(
    (req, res) => {
        // res.writeHead(200 ,{'Content-type' : 'text/html'});
        // res.end('<h2>Hello Node.js Server</h2>')
        
        let filePath = "";
        switch(req.url){
            case '/':
                filePath = './index.html';
                break;
            case '/about':
                filePath = './About.html';
                break;
            case '/contact':
                filePath = './Contact.html';
                break;
            default:
                filePath = './404.html';
        }
        let data = fs.readFileSync(filePath, 'utf-8');
        res.end(data);
    }
);

server.listen(8000, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server start at http://localhost:8000`);
    }
});