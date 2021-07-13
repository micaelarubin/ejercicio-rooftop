const express = require('express')
const app = express()

// Creating the middleware and verifying the authorization
let isAuthorized = function (req, res, next) {
    let authorization = 'Bearer 65a83e72c7e990a3e6565ae8b7cc071c'
    if (authorization === req.get('Authorization')) {
      next()
    // If token isn't the right one, the authorization is denied
    } else { 
        return res.status(401).send('Sorry you are unauthorized')
    }
}

// Creating the app
app.use(isAuthorized)

// If authorized
app.get('/', (req, res) => {
    res.send('You are authorized');
})

// Port to use
app.listen(3000)