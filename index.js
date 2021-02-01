const server = require('./app_modules/express')
const mongo = require('./app_modules/mongo')
const port = require('./app-config.json').app.port


//get
server.get('/get', (req, res) => {
    let query = { }
    mongo.select('test', 'test', query).then(
        (sucess) => {
            res.send(sucess)},
        (reject) => {
            let erro = { erro : reject }
            res.send(erro)})
})


//post
server.post('/post', (req , res) =>{
    let value = {
        title : req.body.title,
        text : req.body.text
    }
    mongo.insert('test', 'test', value).then(
        (sucess) => {
            res.send(sucess === true ? "inserted" : "not inserted" )},
        (reject) => {
            let erro = { erro : reject }
            res.send(erro)})
})

//run
server.listen(port, () => {
    console.log('server running at http://localhost:' + port)
})