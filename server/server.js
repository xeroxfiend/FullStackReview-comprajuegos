require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authCtrl = require('./controllers/authController')
const gamesCtrl = require('./controllers/gamesController')


app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

//enpoints

//register
app.post('/auth/register', authCtrl.register)

//login
app.post('/auth/login', authCtrl.login)

//logout
app.delete('/auth/logout', authCtrl.logout)



app.get('/api/games', gamesCtrl.getGames)

// app.post()

// app.post()

// app.delete()


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Connected to database')
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}`)
    })
})

