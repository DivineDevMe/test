const mongoose = require('mongoose');

const chatShema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }

});

const Chat = mongoose.model('Chat',chatShema);

module.exports = {Chat};