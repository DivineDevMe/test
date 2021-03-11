const mongoose = require('mongoose');

const chatShema = mongoose.Schema({
    name:{
        type:String
    }

});

const Chat = mongoose.model('Chat',chatShema);

module.exports = {Chat};