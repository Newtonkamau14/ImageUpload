const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 3000;


//Db connection
mongoose.connect('mongodb://localhost:27017/Imageupload',() => {
    console.log('Connected to database')
});



//Middleware
app.use(expressLayouts)
app.set('view engine','ejs')
app.set('layout','layouts/layout')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))



//Routes



//Homepage
app.get('/',(req,res) => {
    res.render('pages/home',{
        title: 'Homepage'
    })
})


//Listening on port
app.listen(PORT,() => {
    console.log('Listening on port http://localhost:3000')
})