const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    fullname:{
        type:String,
        required:true,
        maxlength: 200
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
});

const User = mongoose.model('User',userSchema);

module.exports = {User};