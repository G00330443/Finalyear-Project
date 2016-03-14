var mongoose = require('mongoose');
var db=require('./user').db;
//；连接数据库
console.log("itemDB connected");
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
	id:String,
	username : String,
	location : String,
	category: String,
	picture : String,
	name: String,
	item_code: String,
	color : String,
	searchtimes : String,
	number: String,
	createTime:String,
	phone : String,
	description : String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联


exports.mongoose = mongoose;
exports.user = db.model('items', userScheMa);
exports.userSchema=userScheMa;