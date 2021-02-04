exports.Schema = require('mongoose').Schema({
    name : { type : String , required : true},
    lastName : { type: String, required : true},
    email : { type : String, required : true},
    birth : { type : Date, required : true},
    country : { type : String, required : true}
})