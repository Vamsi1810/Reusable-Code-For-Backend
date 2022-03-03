const mongoose = require('mongoose')

const studentschema = new mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    idno : {
        type:Number,
        required : true
    },
    department:{
        type: String,
        required : true
    },
    password :{
        type : String,
        required : true
    }
})

module.exports =  mongoose.model('studentschema', studentschema)