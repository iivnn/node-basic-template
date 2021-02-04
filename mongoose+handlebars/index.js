//express
const app = require('./module_config/express.config')
const port = 3000

//mongoose
const mongoose = require('./module_config/mongoose.config')
const uri = 'mongodb://localhost:27017/test'

//routes
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/api/user', (req, res) => {
    mongoose.connect(uri)
    let User = mongoose.model('user')
    new User(req.body).save()
    .then(
        () => {
            res.send('saved')
        })
    .catch(
        (err) => {
            res.send(err)
        })
    .finally(
        () => {
            mongoose.disconnect() 
        })
})

app.listen(port, () => {
    console.log('server running on http://localhost:' + port)
})