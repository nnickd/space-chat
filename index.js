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
    // io.emit('chat message', req.body.message);
    res.send(req.body.message);
});


app.get('/api/100', function (req, res) {
    res.send("What's");
});
app.get('/api/99', function (req, res) {
    res.send(" up");
});
app.get('/api/98', function (req, res) {
    res.send(", fellows?");
});

app.get('/api/1', function (req, res) {
    res.send("Easter");
});
app.get('/api/2', function (req, res) {
    res.send(" egg");
});
app.get('/api/3', function (req, res) {
    res.send(", y'all!");
});




app.listen(port, function () {
    console.log(`listening on *:${port}`);
});

// io.on('connection', function (socket) {
//     console.log('a user connected');
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });

//     socket.on('chat message', function (msg) {
//         io.emit('chat message', msg);
//     });
// });