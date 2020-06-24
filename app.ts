import express, {Router} from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import routes from './api/routes'
import bookRoute from './api/routes/book'
const app = express();

//initialize a simple http server
const server = http.createServer(app);

//start our server
server.listen(3000, () => {
    console.log(`Server started on port 3000} :)`);
});

app.get('/', (req, res) => {
    res.send("Hey there my guy")
})

//////////////////////////////////////////////////////////////////
app.use('/book', bookRoute)
//routes(app)
