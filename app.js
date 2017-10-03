var express = require('express');
var app = express();
var mongo =require('mongodb');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3002;

var cookieParser = require('cookie-parser')

var exphbs = require('express-handlebars')
var Users = require('./models/gymUser')

mongoose.connect('mongodb://darvin:darvin@123@ds157624.mlab.com:57624/gym-dashboard',function(conn){
    console.log("DB is connected");
});

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layouts'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:"jonSnow",resave:false,saveUninitialized:true}));

app.get('/',function(req,res){
    res.render('index');
});
app.get('/add-lead',function(req,res){
   res.render('add-lead');
});
app.post('/verifyPhone',function(req,res){
  console.log(req.body);
  var phoneNo = req.body.phoneNo;
 
  /*Users.findOne( {"phoneNo": phoneNo}, function(err, user) {
    if(err){
        console.log(err);
        return res.status(500).send();
    }
    if(!user)
    {
        res.render('add-lead')
    }
    else
     {   
        res.render('add-lead')
     }
});*/
res.send(JSON.stringify("true"));
});
app.post('/add-lead',function(req,res){
   
   

 var newUser = new Users({
    fullname: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phone
    
    
});
newUser.save(function(err, Users){
    if(err)
    
    console.log(err);
       
    else
       res.send('saved');
       
 });
});
app.listen(port,function() {
    console.log("Its running fine");
   
   
});