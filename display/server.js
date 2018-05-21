var express = require('express')
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser')
const api_root = "/api"
let SocketIO = undefined

io.on('connection', socket => {
  console.log('Client connect!')
  SocketIO = socket
  socket.emit('news', {hello: 'world'});
});
app.use(bodyParser.urlencoded(true))
app.use(express.static(__dirname + '/build'));

// app.get('/', (req, res) => {
//   res.sendfile(__dirname + '/build/index.html');
// });



// app.post(`${api_root}/init`, (req, res) => {     SocketIO.emit('init',
// {current_number: parseInt(req.body.number)})     res.json({status: true,
// message: "Emit Success"}) })

app.post(`${api_root}/number`, (req, res) => {
  SocketIO.emit('current_number', {
    current_number: parseInt(req.body.number)
  })
  res.json({status: true, message: "Emit Success"})
})

app.post(`${api_root}/number/max`, (req, res) => {
  SocketIO.emit('max_number', {
    max_number: parseInt(req.body.number)
  })
  res.json({status: true, message: "Emit Success"})
})

app.post(`${api_root}/plus`, (req, res) => {
  SocketIO.emit('plus_number', {
    plus_number: parseInt(req.body.plus)
  })
  res.json({status: true, message: "Emit Success"})
})

app.post(`${api_root}/player`, (req, res) => {
  SocketIO.emit('player_count', {
    player_count: parseInt(req.body.count)
  })
  res.json({status: true, message: "Emit Success"})
})

app.post(`${api_root}/player/current`, (req, res) => {
  SocketIO.emit('current_player', {
    current_player: parseInt(req.body.current)
  })
  res.json({status: true, message: "Emit Success"})
})

server.listen(8001, () => {
  console.log('IO Server Start!')
});