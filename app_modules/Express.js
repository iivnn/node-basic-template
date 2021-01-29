//express
const express = require('express')
const app =  express()

//body-parser
const parser = require('body-parser')
app.use(parser.urlencoded({extended : false}))
app.use(parser.json())

module.exports =  app