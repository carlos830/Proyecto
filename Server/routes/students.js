var express = require ('express');
var studentsController=require('../controllers/students');
var models = require('../models');
var app = express.Router();

module.exports=(app)=>{
	app.post('/api/students',studentsController.create);
}
