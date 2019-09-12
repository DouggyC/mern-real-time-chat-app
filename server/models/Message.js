const mongoose = require('mongoose');

const Message = mongoose.model('msg', { name: String, message: String });

module.exports = Message;
