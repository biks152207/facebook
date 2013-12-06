var db = require('../lib/db');
var UserSchema = new db.Schema({
username : {type: String, unique: true}
, dbcount : String
})
var MyUser = db.mongoose.model('User', UserSchema);
// Exports
module.exports.addUser = addUser;
// Add user to database
function addUser(username, password, callback) {
	console.log(username);
	console.log(password);
var instance = new MyUser();
console.log(instance);
instance.username = username;
instance.dbcount = password;
instance.save(function (err) {
if (err) {
	console.log(err);
callback(err);
}
else {
callback(null, instance);
console.log('hey');
}
});
}