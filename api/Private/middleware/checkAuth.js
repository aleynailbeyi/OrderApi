import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
	try {
		// console.log('req-->', req.headers.authorization);
		const token = req.headers.authorization;
		const decoded = jwt.verify(token, 'wrong-secret');
		req.decoded = decoded;
		req.decoded.language = req.headers.language || 'tr';
		next();
	}
	catch (error) {
		console.log(error);
		return res.status(400).send({
			message: 'no token'
		});
	}
};