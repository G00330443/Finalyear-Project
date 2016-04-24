var mongoose = require('mongoose');
var db=require('./user').db;
//；连接数据库
console.log("itemDB connected");
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
	userid:String,
	username : String,
	name:Array,
	itemid : Array,
	total: Number,
	createTime:String,
    Address: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联


exports.mongoose = mongoose;
exports.user = db.model('orders', userScheMa);
exports.userSchema=userScheMa;