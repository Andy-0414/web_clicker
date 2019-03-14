var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('userData', new Schema({
    nickname : String,
    password : String,
    level : Number,
    xp : Number,
    money : Number
}));