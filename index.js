const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

//initializations 
// require('./env_config').initEnv()
const app = express()

// import routes
const userRoutes =  require('./src/routes/users')

//settings
const PORT = process.env.port || 8080;
// parse application/x-www-form-urlencoded
    // app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
    // app.use(bodyParser.json())

// app.use('/api/v1', require('./controllers/api_v1'));

// Middlewares
app.use(express.urlencoded({ extended:true }))

// Routes
app.use('/api/v1/users', userRoutes)

// starting server
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})

// DB_USER VYQzR986qW
// DB_NAME =VYQzR986qW
// passGkIM2uFTKB

