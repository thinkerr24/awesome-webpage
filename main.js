const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
    
});

server.listen(9999);