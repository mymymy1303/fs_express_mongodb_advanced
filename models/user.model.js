var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	key: String,
	username: String,
	email: String,
	hash: String
}, {
	timestamps: true,
	collection: 'users'
})

var User = mongoose.model('User', userSchema)

module.exports = User
