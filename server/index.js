require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const PORT = process.env.APP_PORT || 5000
const app = express()
const userRouter = require('./api/users/user.router')

app.use(express.json())
app.use('/api/users', userRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()