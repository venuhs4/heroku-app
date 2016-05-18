var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        Name: 'Venu Prasad', 
        Time: new Date(), 
        Message: 'Hello World!'
    }));
});

var port = Number(process.env.PORT || 3000);

server.listen(port, function () { 
    console.log(port);
});
