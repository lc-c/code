var express = require('express');
var router = express.Router();
var control = require("../dbs/control");
/* GET home page. */
router.post('/login', function(req, res, next) {
	if(req.body.user === "admin"){
		res.json({result:"OK"})
	}else{
		res.json({result:"ERR"})
	}
});
router.post("/data", function(req, res, next) {
	control.getData(req.body.name,req.body.index).exec(function (err,doc) {
		if(err){
			res.statusCode = 500;
			res.json({ result:"ERR"});
		}else{
			res.json(doc);
		}
	});
});
router.post("/delete", function(req, res, next) {
	control.delete(req.body.name, req.body.id).exec(function(err, doc) {
    if (err) {
      res.statusCode = 500;
      res.json({ result: "ERR" });
    } else {
      res.json({ result: "OK" });
    }
  });
});
router.post("/update", function(req, res, next) {
	control.update(req.body.name, req.body.id,req.body.data).exec(function(err, doc) {
    if (err) {
      res.statusCode = 500;
      res.json({ result: "ERR" });
    } else {
      res.json({ result: "OK" });
    }
  });
});
module.exports = router;
