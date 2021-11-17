const express = require('express');

if (process.env.NODE_ENV !== 'production') 
    require('dotenv').config();
//initializations 
// require('./env_config').initEnv()
const app = express()

// import routes
const userRoutes =  require('./src/routes/users')

//settings
const PORT = process.env.PORT || 8080;

// app.use('/api/v1', require('./controllers/api_v1'));

// Middlewares
// parse application/json
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended:true }))

// Routes
app.use('/api/v1/users', userRoutes)

app.get('/', (req, res)  => {
    res.send('Hello world')
})

// starting server
app.listen(PORT, () => {
    console.log(process.env.PORT)
    console.log(`Example app listening at http://localhost:${PORT}`);
})
