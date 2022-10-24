import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const basename = path.basename(__filename);

const getFileRoute = (filename)=> {
	const string = filename.split('.')[0].split('Route')[0].toLowerCase();
	return string;
};
const folderRoute = `${__dirname}/routes/`;
fs
	.readdirSync(folderRoute)
	.filter((file) => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach((file) => {
		const routeName = getFileRoute(file); 
		app.use(`/v1/${routeName}`, require(folderRoute + file.split('.')[0]));
	});

module.exports = app;
