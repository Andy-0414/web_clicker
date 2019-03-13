
// Mongo DB
const mongoose = require('mongoose');
const _db = mongoose.connection;

const config = require('../config') // 설정을 불러옴

_db.on('error', console.error);
_db.once('open', function () {
    
});
mongoose.connect(config.mongo.url, { useNewUrlParser: true });

module.exports = {
    getDB() {
        return _db
    }
}