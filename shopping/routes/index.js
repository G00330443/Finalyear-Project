
var session = require('express-session');
var express = require('express');
var querystring=require('querystring');
var crypt=require('../include/Crypt_function.js');
require('date-utils');
//email
var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport("SMTP", {
    host: "smtp-mail.outlook.com",
     port: 587, 
    auth: {
        user: "Sunnywanghaoyu@outlook.com",
        pass: "wangqq626558736"
    }
}); 
var mailOptions = {
    from: 'sunny <Sunnywanghaoyu@outlook.com> ', // sender address
    to: '626558736@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};
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

//Setting  orders DB
var orderScheMa=require('../Database/Orders').userSchema;
var orderMongoose=require('../Database/Orders').mongoose;
var order=require('../Database/Orders').user;
//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/schools');

router.get('/test', function(req, res) {
 
    
    res.render('test');
    });
router.get('/', function(req, res) {
  //  mongoose.connect('mongodb://harry:harry@192.168.1.100:27017/webSite');
    
    item.find({category:"sport"}).sort({'searchtimes': -1}).limit(10).exec(function(err,sport){
        req.session.items_sport=sport;
     //   console.log(docs);
       // console.log(sport);
         // find book
         item.find({category:"book"}).sort({'searchtimes': -1}).limit(10).exec(function(err,book){
            req.session.items_book=book;
           
            item.find({category:"furniture"}).sort({'searchtimes': -1}).limit(10).exec(function(err,furniture){
            
                   req.session.items_furniture=furniture;
                   
                   
                        item.find({}).sort({'searchtimes': -1}).limit(5).exec(function(err,hotest){
                               
                               
                                res.render('index', { title: 'index' ,items_sport:sport,
                                           hotest:hotest,
                                           items_book:book,
                                           items_furniture:furniture,
                                           userpicture:req.session.userpicture,
                                           username:req.session.username,
                                           user:req.session.user,
                                           sum:req.session.sum
                                    });
                        });
                });
         });
    });
    
});
router.get('/login', function(req, res) {
	res.render('login', { title: 'login' ,userpicture:req.session.userpicture,
               username:req.session.username,
                sum:req.session.sum})
});

router.get('/logout',function(req,res){  
        req.session.user = null;
        req.session.username=null;
        req.flash('success','登出成功');  
        res.redirect('/login');  
    }); 

router.get('/register', function(req, res) {
	res.render('register', { title: 'register',
               userpicture:req.session.userpicture ,
               username:req.session.username,
                 sum:req.session.sum           
    })
});
router.get('/AdminManage', function(req, res) {
    
    if (req.session.user!='') {
        res.render('AdminManage', { title: req.session.username ,
                   user:req.session.user,
                   username:req.session.username,
                   userpicture:req.session.userpicture,
                    sum:req.session.sum
        })
  //  res.locals.message = '<div  style="margin-bottom:20px;color:red;">'+req.session.username+'</div>';
    //res.write(req.session.username);
    //console.log(req.session.user[0].name);
    }else{
    res.render('index', { title: 'index' ,
               items:req.session.items,
               userpicture:req.session.userpicture,
               username:req.session.username,
               user:req.session.user,
                 sum:req.session.sum       
        });
    }
});
router.get('/Admin', function(req,res){
    
    var flag;
    if (req.session.username!="admin") {
        flag='1';
	res.render('login', { title: 'login' ,
               userpicture:req.session.userpicture,
               username:req.session.username,
               user:req.session.user,
                sum:req.session.sum
        });
    }
    User.find( function (err, docs) {
        if (docs!='' ) {
            if (flag=='1') {
                res.render('index');
            }else{
                res.render('Admin', { posts: docs ,
                           user:req.session.user,
                           username:req.session.username,
                           userpicture:req.session.userpicture,
                            sum:req.session.sum
                           })
            }
        }else{
            return '';
        }
    });
});
router.get('/item_category_add' , function(req,res){
    res.render('../items/itemsAdd',{title : "CategoryAdd",
               user:req.session.user,
               username :req.session.username,
               userpicture:req.session.userpicture,
                sum:req.session.sum
        });
});

router.get('/about' , function(req,res){
    res.render('about',{title : "about",
               user:req.session.user,
               username :req.session.username,
               userpicture:req.session.userpicture,
                sum:req.session.sum
        });
});

router.get('/contact' , function(req,res){
    res.render('contact',{title : "contact",
               user:req.session.user,
               username :req.session.username,
               userpicture:req.session.userpicture,
                sum:req.session.sum
        });
});
router.get('/userManagePage', function(req, res) {
    
    if (req.session.user==undefined) {
        res.render('login', { title: 'login' ,userpicture:req.session.userpicture,
               username:req.session.username,
                sum:req.session.sum})
    }else{
    res.render('userManagePage',{username:req.session.username,
               user:req.session.user,
               userpicture:req.session.userpicture,
                sum:req.session.sum           
    });
    }
});

router.get('/showAllItems', function(req,res){
    
    item.find( { 'username': req.session.username },function (err, docs) {
        if (docs!='' ) {
            
                res.render('../items/showAllItems', { posts: docs ,
                           userpicture:req.session.userpicture,
                           user:req.session.user,
                           username:req.session.username,
                            sum:req.session.sum
                            });
            }
    });
});

router.get('/item_detail_page',function(req,res){
    res.render('item_detail_page',{username:req.session.username,
               user:req.session.user,
               userpicture:req.session.userpicture,
                sum:req.session.sum
                });    
});

router.get('/item_detail_page/productname/:_id', function(req, res) {
    console.log(req.params._id);
    var cc;
    item.find({_id:req.params._id},function(err,docs){
        req.session.product=docs;
       console.log(docs);
        cc=docs;
        var vv=parseInt(docs[0].searchtimes)+1;
        console.log(parseInt(docs[0].searchtimes)+1);
        var conditions = {_id : req.params._id};
    var update     = {$set : {searchtimes :vv}};
    var options    = {upsert : true};
    item.update(conditions, update, options, function(error){
        if (error) {
            //code
        }else{
            console.log("success");
        }
    });
    res.render('item_detail_page', { title: 'item_detail_page' ,
               product:req.session.product,
               userpicture:req.session.userpicture,
               username:req.body.username,
                sum:req.session.sum
                });
    });
    
    
    
});

router.get('/ordercheck', function(req, res) {
    console.log(req.session.username+"-=-=-=-=-=");
    if (req.session.username==undefined) {
        res.render('login',{userpicture:req.session.userpicture,
                    sum:req.session.sum,
               username:req.session.username,
               user:req.session.user,
              
                    });
    }else{
        console.log(req.body._id);
        item.find({'_id':req.session.product[0]._id}, function (err, docs) {
            if(err) {
                console.log(err);
            } else {
                console.log("-=-=-=-=");
               
            
            //    var result = replacer.replace(contents);
                console.log(docs.picture);
             
               res.render('OrderCheck', { title: 'order' ,
                          product:docs,
                         itemss:req.session.seaitem,
               userpicture:req.session.userpicture,
               username:req.session.username,
               user:req.session.user,
               sum:req.session.sum
                           });
             console.log(orders);
            }
        });
    }   
});

router.get('/shoppingCart', function(req, res) {
    
        res.render('shoppingCart', { title: 'shoppingCart' ,
                                      itemss:req.session.seaitem,
               userpicture:req.session.userpicture,
               username:req.session.username,
               user:req.session.user,
               sum:req.session.sum
                                           });
      
             
});


router.get('/searchitempage', function(req, res) {
    console.log(req.session.seaitem);
    res.render('searchitempage', { title: 'index' ,
               ooo:req.session.ooo,
               
               itemss:req.session.seaitem,
               userpicture:req.session.userpicture,
               username:req.session.username,
               user:req.session.user,
               sum:req.session.sum
        });
    
});

router.get('/searchitem/category/:category', function(req, res) {
   
    item.find({category:req.params.category},function(err,docs){
       
        res.render('searchitem', { title: 'index' ,
               ooo:req.body.category,
               
               itemss:docs,
               userpicture:req.session.userpicture,
               username:req.session.username,
               user:req.session.user,
               sum:req.session.sum
        });
    });
    
    
});

router.get('/showCategory', function(req, res) {
    item.distinct("category",function(err,dd){
        console.log(dd);
          res.render('showCategory', { title: 'index' ,
              category:dd,
               itemss:req.session.seaitem,
               userpicture:req.session.userpicture,
               username:req.session.username,
               user:req.session.user,
               sum:req.session.sum
        });
    });   
});

router.get('/allorders', function(req, res) {
    order.find({username:req.session.username},function(err,dd){
        console.log(dd);
          res.render('AllOrders', { title: 'index' ,
               allorders:dd,
               itemss:req.session.seaitem,
               userpicture:req.session.userpicture,
               username:req.session.username,
               user:req.session.user,
               sum:req.session.sum
        });
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
    var password = req.body.password;
    var crypto=new crypt(password,'yuwhisn');
    var doc = {name : req.body.username,password : crypto.encrypt  ,email:req.body.email ,phoneNumber : '000',Address : 'ssadasd',flag : '1'};

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
                        
                        var mailOptions = {
                            from: 'sunny <Sunnywanghaoyu@outlook.com> ', // sender address
                            to: '626558736@qq.com', // list of receivers
                            subject: 'Hello ✔', // Subject line
                            text: 'Hello world ✔', // plaintext body
                            html: '<b>Congrulation you register an account ✔</b>' // html body
                        };
                        transport.sendMail(mailOptions, function(error, info){
                            if(error){
                                console.log(error);
                            }else{
                                console.log('Message sent: ' + "congrulation you register a new account");
                            }
                        });
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
    var password=req.body.password;
    console.log(password+"$$");
    var crypto=new crypt(password,'yuwhisn');
    var code=crypto.encrypt;
    console.log(code+"-=-=-=-=");
    User.find({ 'name': req.body.username ,'password':code}, function (err, docs) {
        
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
    var dt = new Date();
    var time=dt.toFormat("DD-MM-YYYY HH24:MI:SS");
    time=time.toString();
     console.log(time);
      item.find({ 'username': req.session.username }, function (err, docs) {
         console.log("2");
            if(docs!=undefined){
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
                 
               var doc={username : req.body.username,location : req.body.location,category : req.body.category,name : req.body.itemname,
               picture : req.body.picture,phone : req.body.phone,description:req.body.description,price:req.body.price,
               createTime:time
               };
            //   var mongooseModel = item.model('items', itemScheMa);
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

var sum=0;
var orders= new Array();
orders.push({total:0});

router.post('/addToCart123', function(req, res) {
    console.log("123");
    console.log(req.body._id);
    
    var len=orders.length;
    var flag=0;
    item.find({_id:req.body._id}, function (err, docs) {
        if(err) {
        
        }else{
            
            var name=docs[0].name;
            var ord={id:req.body._id,
                name:docs[0].name,
                price:parseInt(docs[0].price),
                number:1,
                username:docs[0].username,
                category:docs[0].category,
                color:docs[0].color,
                picture:docs[0].picture
                };
                
            orders[0].total=parseInt(orders[0].total)+parseInt(docs[0].price);
            for(var i=0;i<len;i++){
                
                if (orders[i].name==name) {
                    //code
                   
                    orders[i].number=orders[i].number+1;
                    flag++;
                }
            }
            
            if (flag==0) {
                orders.push(ord);
            }
            console.log(orders);
            req.session.sum=orders;
            console.log(orders[1].name);
            res.send(orders);
           
         
        }
    });
});

router.post('/updatefromCart', function(req, res) {
    
    console.log(req.body._id);
    var but_type=req.body.but_type;
    var len=orders.length;
    var flag=0;
    item.find({_id:req.body._id}, function (err, docs) {
        if(err) {
        
        }else{
            
            var name=docs[0].name;
            var ord={id:req.body._id,
                name:docs[0].name,
                price:parseInt(docs[0].price),
                number:1,
                picture:docs[0].picture};
                
            if (but_type==1) {
                orders[0].total=parseInt(orders[0].total)+parseInt(docs[0].price);
            }else if(but_type==0){
                orders[0].total=parseInt(orders[0].total)-parseInt(docs[0].price);
            }
                
            
            for(var i=1;i<len;i++){
                
                if (orders[i].name==name) {
                    //code
                     if (but_type==1) {
                         orders[i].number=orders[i].number+1;

                    }else if(but_type==0){
                        orders[i].number=orders[i].number-1;

                    }
                    
                    if ( orders[i].number<=0) {
                    flag=i;
                    }
                }
                
              
            }
             
             if(flag!=0){
                orders.pop(orders[flag]); 
             }              
            
           
             
            console.log(orders);
            req.session.sum=orders;
           console.log(orders[0].total);
            res.send(orders);
           
         
        }
    });
});


router.post('/searchitempage', function(req, res) {
   console.log("---");
   console.log(req.body.search);
   var c=req.body.search;
   var type=req.body.type;
   var ww1=req.body.ww1;
   var ww2=req.body.ww2;
   var ww3=req.body.ww3;
    var pattern1 = new RegExp('^'+c,"i");;
          
    req.session.ooo=c;
    if (type==123) {
        item.find({Location:ww1,category:ww3}).sort({'searchtimes': -1}).limit(20).exec(function(err,docs){
     //   console.log(docs);
        console.log(docs);
          req.session.seaitem=docs;
             res.send(docs);
         });
    }
    if (type==undefined) {
        item.find({name:pattern1}).sort({'searchtimes': -1}).limit(20).exec(function(err,docs){
       //   console.log(docs);
          console.log(docs);
            req.session.seaitem=docs;
               res.send(docs);
      });
    }           
});


router.post('/user_items_manage', function(req, res) {
   console.log("---");
   console.log(req.body._id);
    var but_type=req.body.but_type;
    var flag=0;
     var conditions = {_id : req.body._id};
    var update     = {$set : {name : req.body.name, price : req.body.price ,
    description : req.body.description, createtime:req.body.createtime,number:req.body.number,
    category:req.body.category
    }};
    var options    = {upsert : true};
    if (but_type==0) {
        item.update(conditions, update, options, function(error){
            res.send('');
    });
    }
    
    if (but_type==1) {
       item.remove({_id:req.body._id}, function (err, docs) {
        res.send('');
        });
    }
});


router.post('/adminusermanage', function(req, res) {
   console.log(req.body._id);
   var c=req.body._id;
   var nam=req.body.name;
   User.remove({_id:c},function(err,docs){
       
       if (!err) {
        item.remove({username:nam},function(error,dd){
            res.send('');
          });
       }
   });       
});

router.post('/paying', function(req, res) {
   console.log(req.body._id);
   var c=req.body._id;
   
   
    var dt = new Date();
    var time=dt.toFormat("DD-MM-YYYY HH24:MI:SS");
    time=time.toString();
   console.log(time);
   var array=new Array();
   var arrayname=new Array();
   var len=orders.length;
   console.log(len);
   for(var i=1;i<len;i++){
        array.push(orders[i].id);
        arrayname.push(orders[i].name);
        console.log(orders[i].id);
        console.log(orders[i].name);
   }
   
   var ord = {
	userid:c,
	username : req.session.username,
	itemid : array,
    name:arrayname,
	total: req.session.sum[0].total,
	createTime:time,
    Address: req.session.user.Address
    };
    
   order.find({userid:c},function(e,dess){
        if (!e) {
            order.create(ord,function(err,docs){
                    
                    if (!err) {
                         sum=0;
                        orders=new Array();
                        req.session.sum=new Array();
                       }
                });       
        }
    });
   
});


//----------------(**********************************************)
//functions



module.exports = router;
