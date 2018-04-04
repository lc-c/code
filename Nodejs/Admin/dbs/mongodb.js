//var setting=require('setting.js');
var mongoose=require('mongoose');
var schema=require('./schema');
var Schema=mongoose.Schema;
mongoose.Promise = global.Promise;
var db=mongoose.connect('mongodb://localhost/listData');
mongoose.connection.on('error',function(err){
	if(err)console.log("mongoerr: "+err);
});

module.exports = {
	user: mongoose.model("user", schema.user),
	advertising: mongoose.model("advertising", schema.advertising),
	recruit: mongoose.model("recruit", schema.recruit),
	apply: mongoose.model("apply", schema.apply)
};