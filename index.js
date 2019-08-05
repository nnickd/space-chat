var app = require('express')();
var axios = require('axios');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/chat', jsonParser, function (req, res) {
    console.log(req.body);
    io.emit('chat message', req.body.message);
    res.send(req.body.message);
});


// app.get('/api/100', function (req, res) {
//     res.send("What's");
// });
// app.get('/api/99', function (req, res) {
//     res.send(" up");
// });
// app.get('/api/98', function (req, res) {
//     res.send(", fellows?");
// });

// app.get('/api/1', function (req, res) {
//     res.send("Easter");
// });
// app.get('/api/2', function (req, res) {
//     res.send(" egg");
// });
// app.get('/api/3', function (req, res) {
//     res.send(", y'all!");
// });

http.listen(port, function () {
    console.log(`listening on *:${port}`);
});





// var messages = [];
// function doThing(i, messages) {
//     if (i == 0 || messages.length < 3) {
//         axios.get(`https://superspacechat.herokuapp.com/api/${i}`).then(function (req) {
//             messages.push(req.data)
//             console.log(messages)
//             messages = doThing(i - 1, messages)
//         }).catch(error => {
//             // console.log(messages)
//             messages = doThing(i - 1, messages)
//         });
//     } else {
//         return messages
//     }
// }

// for (i = 0; i <= 100; i++) {
//     if (messages.length > 3) { return; } 


//     axios.get(`https://superspacechat.herokuapp.com/api/${i}`).then(function (req) {
//         messages.push(req.data)
//         console.log(messages)
//     // }).catch(error => console.log(error));
//     }).catch(error => true);
// }


// var message = doThing(100, messages);
// console.log(message);
// axios.post('http://superspacechat.herokuapp.com/api/chat', { 'message': message }).then(
//     function(resp) {
//         console.log(resp);
//     },
//     function (error) {
//         return true
//     }
// )

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});