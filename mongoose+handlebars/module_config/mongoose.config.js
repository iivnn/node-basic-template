const mongoose = require('mongoose')

//config
mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

//models
const UserSchema = require('../model/User').Schema
mongoose.model('user', UserSchema)

module.exports = mongoose