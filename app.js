const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 3000;


//Middleware
app.use(expressLayouts)
app.set('view engine','ejs')
app.set('layout','layouts/layout')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//Db connection
require('./server/database/database')();

//Calling routes
app.use('/',require('./server/router/router'))

//Listening on port
app.listen(PORT,() => {
    console.log('Listening on port http://localhost:3000')
})