'use strict';
var mongoose = require('mongoose');
var usersSchema = mongoose.Schema({
    fullname: {
        type: String 
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    lead: {
        type:Boolean
    },
    date:{
        type:String
    }
   
});
   var Users = mongoose.model('Users', usersSchema);
   
   module.exports= Users;