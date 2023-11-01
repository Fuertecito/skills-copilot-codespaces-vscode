//create a web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var passport = require('passport');
require('../config/passport')(passport);

  







