const mongoose = require('mongoose');

const chatShema = mongoose.Schema({

});

const Chat = mongoose.model('Chat',chatShema);

module.exports = {Chat};