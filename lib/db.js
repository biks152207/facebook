var mongoose=require('mongoose');
var Schema=mongoose.Schema;
module.exports.mongoose=mongoose;
module.exports.Schema=Schema;

var username="viks";
var password="beatles1";
var address="@ds053188.mongolab.com:53188/viks";
connect();
function connect(){
var url='mongodb://' + username + ':' + password + address;
	mongoose.connect(url);

}

	
