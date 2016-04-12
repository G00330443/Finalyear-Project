var mongoose = require('mongoose');

//user : eee    password : eee     
//
var db = mongoose.connect('mongodb://eee:eee@localhost/webSite');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
	picture: String,
	name: String,
	password: String,
	email : String,
	phoneNumber : String,
	Address : String,
	flag : String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
if (db!=null) {
    console.log("DbConnect");
}

exports.mongoose = mongoose;
exports.user = db.model('users', userScheMa);
exports.db=db;
exports.userSchema=userScheMa;