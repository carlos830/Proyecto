'use strict'
var models = require('../models');
var Student = models.students;
//var request = require('request');
var http = require('https');
//Crear estudiante

function create(req,res){
	Student.create(req.body)
	.then(student=>{
		res.status(200).send({student});
	})
	.catch(err=>{
	res.status(500).send({err});	
	})
}


module.exports={
	create
}