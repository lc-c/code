let Promise = require("bluebird");
let co = Promise.coroutine;
let fs = require("fs");
let Thread = require("node-threadobject");
let thread = new Thread();