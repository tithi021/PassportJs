// app/model/user.js
// load the things we need

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//define the schema for the user model
var userSchema = mongoose.Schema({
	local:{
		email: String,
		password: String
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	twitter: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	},

});

//methods
//generating a hash
userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking is password is valid
userSchema.methods.validPassword = function(password){
	return bcyrpt.compareSync(password, this.local.password);
}
//create a model for the app and exports it to our app
module.exports = mongoose.model('User', userSchema);
