const express = require('express')
const app = express()
app.use(express.static('static'));

//body-parser
const parser = require('body-parser')
app.use(parser.urlencoded({extended : false}))
app.use(parser.json())

//handlebars
const handlebars = require('express-handlebars')
app.engine('handlebars',handlebars({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

module.exports = app