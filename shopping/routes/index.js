
var session = require('express-session');
var express = require('express');
var router = express.Router();
var fs=require('fs');
//var db=require('../Database/user').db;
var User=require('../Database/user').user;
var mongoose = require('../Database/user').mongoose;
var userScheMa=require('../Database/user').userSchema;

//Setting  Item DB
var itemScheMa=require('../Database/itemsDB').userSchema;
var itemMongoose=require('../Database/itemsDB').mongoose;
var item=require('../Database/itemsDB').user;
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/schools');

router.get('/', function(req, res) {
    item.find({},function(err,docs){
        req.session.items=docs;
     //   console.log(docs);
        console.log(req.session.items);
    console.log(req.session.picture);
    res.render('index', { title: 'index' ,items:req.session.items,userpicture:req.session.userpicture,username:req.body.username});
    });
    
});
router.get('/login', function(req, res) {
	res.render('login', { title: 'login' ,userpicture:req.session.userpicture})
});
router.get('/register', function(req, res) {
	res.render('register', { title: 'register',userpicture:req.session.userpicture })
});
router.get('/AdminManage', function(req, res) {
    
    if (req.session.user!='') {
        res.render('AdminManage', { title: req.session.username ,userpicture:req.session.userpicture})
  //  res.locals.message = '<div  style="margin-bottom:20px;color:red;">'+req.session.username+'</div>';
    //res.write(req.session.username);
    //console.log(req.session.user[0].name);
    }else{
        res.render('index');
    }
});
router.get('/Admin', function(req,res){
    
    var flag;
    if (req.session.username!="admin") {
        flag='1';
    }
    User.find( function (err, docs) {
        if (docs!='' ) {
            if (flag=='1') {
                res.render('index');
            }else{
                
                res.render('Admin', { posts: docs ,userpicture:req.session.userpicture})
            }
        }else{
            return '';
        }
    });
});
router.get('/item_category_add' , function(req,res){
    res.render('../items/itemsAdd',{title : "CategoryAdd",username :req.session.username,userpicture:req.session.userpicture});
});
router.get('/userManagePage', function(req, res) {
    res.render('userManagePage',{username:req.session.username,user:req.session.user,userpicture:req.session.userpicture});    
});

router.get('/showAllItems', function(req,res){
    
    item.find( { 'username': req.session.username },function (err, docs) {
        if (docs!='' ) {
            console.log(docs);
                res.render('../items/showAllItems', { posts: docs ,userpicture:req.session.userpicture})
            }
    });
});

router.get('/111',function(req,res){
    res.render('../items/111',{username:req.session.username,user:req.session.user,userpicture:req.session.userpicture});    
});
router.get('/111/productname/:name', function(req, res) {
    console.log(req.params.name);
    item.find({name:req.params.name},function(err,docs){
        req.session.product=docs;
    //    console.log(docs);
    console.log(docs[0].picture);
    res.render('../items/111', { title: '111' ,product:req.session.product,userpicture:req.session.userpicture,username:req.body.username});
    });
    
});


//router.get('/showItems',function(req,res){
//    res.render('../items/showItems',{usename:req.session.username,userpicture:req.session.userpicture});
//});

//****------------------------------------------------------------------------------------
/*
router.index = function(req, res){
res.render('index', { title: 'Index' });
};
router.login = function(req, res){
res.render('login', { title: 'Login'});
};
router.register = function(req, res){
res.render('register', { title: 'Register'});
};
router.AdminManage = function(req, res){
res.render('AdminManage', { title: 'AdminManage' });
};
router.Admin = function(req, res){
res.render('Admin', { title: 'Admin' });
};
//router.CategoryAdd = function(req, res){
//    res.render('../items/CategoryAdd', { title: 'CategoryAdd' });
//};
*/
//****------------------------------------------------------------------------------------

router.post('/post', function(req, res) {
  /*  var Schema = mongoose.Schema;
    var userScheMa = new Schema({
	name: String,
	password: String,
    email : String
});*/
    var mongooseModel = User.model('users', userScheMa);

    var doc = {name : req.body.username, password : req.body.password ,email:req.body.email ,phoneNumber : '000',Address : 'ssadasd',flag : '1'};
    
    User.find({ 'name': req.body.username }, function (err, docs) {
            var c=docs.toString();
          //  console.log(c);
            if(c!=''){
                    res.send('0');
                    console.log(docs);
            }else if(c==''){
                console.log(req.body.password);
                console.log(req.body.password_confirm);
                if (req.body.password!=req.body.password_confirm) {
                            res.send('2');
                }else{
                    mongooseModel.create(doc, function(error){
                    if(error) {
                        console.log(error);
                      //  res.render('error');
                    } else {
                     
                        console.log('save ok----------');
                      //  res.render('/');
                        res.send('1');
                       
                        }
                    });
                }
            }
    
    });
	
});

router.post("/logincheck", function (req, res) {
 /*   var Schema = mongoose.Schema;
    var userScheMa = new Schema({
	name: String,
	password: String,
    email : String
});*/
	var mongooseModel = User.model('users', userScheMa);
  //  console.log(req.body.username);
 //  (req.body.username, req.body.password)
    User.find({ 'name': req.body.username ,'password':req.body.password}, function (err, docs) {
		if(docs!='') {	
            req.session.user=docs;
            req.session.username=req.body.username;
            req.session.userpicture=req.session.user[0].picture;
            res.send('0');
        //    res.render('/');
        }else{
            console.log("cant found");
         //   res.redirect('/');
            res.send('1');
           
         //   res.render('index');
        }

    });
});

/*app.get('/logout',function(req,res){
    req.session.user = null;
    res.redirect('/login');
});
*/

router.post('/userupdate',function (req,res){
    console.log("09090898");
    console.log(req.body.picturename);
    console.log(req.body.picture);
    console.log(req.url);
    console.log(req.body.name);
    fs.exists('D:/final/shopping/public/images/'+req.body.name, function (exists) {
      if(!exists){
        console.log("++++");
        fs.mkdir('D:/final/shopping/public/images/'+req.body.name);
      } 
    });
     console.log("++++++++");
   // mongooseModel.update(conditions, update, options, callback);
    var mongooseModel = User.model('users', userScheMa);
    var conditions = {name : req.body.name};
    var update     = {$set : {phoneNumber : req.body.phoneNumber, Address : req.body.address ,picture : req.body.picture}};
    var options    = {upsert : true};
    mongooseModel.update(conditions, update, options, function(error){
        if(error) {
            console.log(error);
            res.send("");
            
        } else {
            fs.writeFile('D:/final/shopping/public/images/'+req.body.name+'/'+req.body.name+'.png',req.body.picture, {flag: 'a'}, function (err) {
                if (err) {
                    console.log(err);
                }else{
                    console.log("success input");
                }
            });
            console.log('update ok!');
            res.send(req.body.picture);
        }
    });
});

router.post('/itemsupdate',function (req,res){
    console.log("1");
    console.log(req.body.picture);
      item.find({ 'username': req.body.username }, function (err, docs) {
         console.log("2");
            if(docs!=''){
          /*      var conditions = {username : req.body.username};
                var update     = {$set : {location : req.body.location, category : req.body.category ,picture : req.body.picture,name:req.body.itemname,phone:req.body.phone,description:req.body.description}};
                var options    = {upsert : true};
                item.update(conditions, update, options, function(error){
                    if(error) {
                        console.log(error);
                    } else {
                        console.log('update ok!');
                        res.send("1");
                    }
                });
            }else{*/
                 console.log("3");
                 
               var doc={username : req.body.username,location : req.body.location,category : req.body.category,name : req.body.itemname, picture : req.body.picture,phone : req.body.phone,description:req.body.description};
               var mongooseModel = item.model('items', itemScheMa);
                item.create(doc, function(error){
                if(error) {
                    console.log(error);
                      //  res.render('error');
                } else {
                     
                    console.log('save ok----------');
                      //  res.render('/');
                    res.send('1');
                       
                    }
                 });
            }
    });
});

router.post('/searchitems', function(req, res) {
    console.log('123456');
    var c=req.body.search;
    var m=new Array();
    item.find({}, {name:1,_id : 0}, function (err, docs) {
        if(err) {
            console.log(err);
        } else {
            console.log("-=-=-=-=");
            console.log(docs);
            var len=docs.length;
            
            var pattern1 = new RegExp('^'+c,"i");;
            for(var i=0;i<len;i++){
                if(pattern1.test(docs[i].name)){
                     console.log((docs[i].name));
                    m.push({title:docs[i].name});
                }
            }
            console.log(m);
            
                 res.send(m);
         
        }
    });
});


//----------------(**********************************************)
//functions


module.exports = router;
