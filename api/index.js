import express from 'express';
import http from 'http';
import parser from 'body-parser';
import pb from './Public';
import pr from './Private';
import options from '../api/src/config/swagger';
import expressSwagger from 'express-swagger-generator';

const app = express();

expressSwagger(app)(options);

const server = http.createServer(app);

app.get('/health', (req, res) => {
	return res.json({
		type: true,
		message: 'System is healthy'
	});
});

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/public', pb);
app.use('/private', pr);

//expressSwagger(options);

server.listen(3000, () => {
	console.log('This is root');
});

export default server;