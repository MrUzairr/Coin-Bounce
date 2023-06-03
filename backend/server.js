const express = require('express');
const dbConnection = require(`./database/index`);
const {PORT} = require('./config/index');
const router = require('./route/index');
const errorHandler = require('./middleWares/errorHandler');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(router);
dbConnection();

app.use('/storage',express.static('storage'));

app.use(errorHandler);
app.listen(PORT,console.log(`Backend is running on port: ${PORT}`));