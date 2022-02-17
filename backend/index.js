const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);
require('dotenv').config();
const taskController = require('./controllers/taskController')

const io = require('socket.io')(http, {
  cors: {
    origin: process.env.SERV_ORIGIN_CORS,
    methods: ['POST', 'GET']
  }
});

const port = 3001

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.status(200).json({ok: true})
});

app.use('/tasks', taskController);

require('./sockets/task')(io); 
// enviando a lib io para servir de dependencia

http.listen(port, () => console.log(`app listening on port ${port}!`))