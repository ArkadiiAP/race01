const express = require('express')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')
// const session = require('express-session')
const port = 3000
const sequelize = require('./db/db')
const User = require('./models/users')
const path = require('path')
const io = require('socket.io')(http)


app.use(bodyParser.json())
app.set('view engine', 'html')

// async function test(){
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
//
// test();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/reg', (req, res) => {
  req.body.userna
})

io.on('connection', (socket) => {
  console.log('user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(port, () => {
  console.log(`Start on port ${port}`)
})