
const express = require('express')
const morgan = require("morgan");

const tasksRouts = require('./routes/tasks');
 
 const app = express();
 app.use(morgan('dev'))
 app.use(express.json())
 app.use(tasksRouts)
 app.listen(3000)
 console.log('server on port 3000')
 