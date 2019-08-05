var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function (socket) {
    //     socket.on('disconnect', function () {
        //     console.log('a user connected');
        //         console.log('user disconnected');
        //     });
        // });
        
// http.listen(3000, function () {
//     console.log('listening on *:3000');
// });
app.listen(port, function () {
    console.log(`listening on *:${port}`);
});