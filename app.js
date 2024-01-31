const express = require('express');
const app = express();
//cors
const cors = require("cors");
app.use(cors());
//urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//path
const path = require('path');
//router
const userRouter = require('./routes/users.route');
//mongoose
require('./config/db')

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

//invalid url
app.use((req, res, next) => {
    res.status(404).json({
        message: "Invalid Url"
    })
})
//server error 
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Server Error"
    })
})

module.exports = app;