import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
    try {
        console.log('req-->', req.headers.authorization);
        const token = req.headers.authorization
        jwt.verify(token, 'secretkeyappearshere');
        next();
    }catch(error) {
        console.log(error);
        return res.status(401).send({
            message: 'Auth failed'
        });
    }
}