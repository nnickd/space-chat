var app = require('express')();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/chat', jsonParser, function (req, res) {
    console.log(req.body);
});

// io.on('connection', function (socket) {
//         socket.on('disconnect', function () {
//             console.log('a user connected');
//                 console.log('user disconnected');
//             });
//         });


app.listen(port, function () {
    console.log(`listening on *:${port}`);
});