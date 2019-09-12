const express = require('express');
const connectDB = require('./config/db');

// const dbUrl =

const app = express();
connectDB();

const server = app.listen(5000, () => {
  console.log('Server is running on port', server.address().port);
});

// Express Middleware - allows access to body data
app.use(express.json({ extended: false }));

app.use(express.static(__dirname));

app.use('/messages', require('./routes/message'));
