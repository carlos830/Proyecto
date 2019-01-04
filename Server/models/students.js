'use strict';
module.exports= (sequelize, DataTypes) =>{
	const students = sequelize.define('academia.students',{
		pk:{
			autoIncrement:true,
			primaryKey:true,
			type:DataTypes.BIGINT
		},
		rut: DataTypes.INTEGER,
		firs_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		gender: DataTypes.INTEGER,
		birthdate: DataTypes.DATE,
		students_creacion: DataTypes.STRING

	});
	return students;
}