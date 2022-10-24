import jwt from 'jsonwebtoken';
import lang from '../../language';

module.exports = (req, res, next, language) => {
    try {
        console.log('req-->', req.headers.authorization);
        const token = req.headers.authorization;
        var decoded = jwt.verify(token, 'wrong-secret');
        if(!decoded){
            return res.status(401).send({
                message: lang(language).checkAuth.sendMessage.Unauthorized
            })
        }
        next();
    }catch(error) {
        console.log(error);
        return res.status(400).send({
            message: lang(language).checkAuth.sendMessage.BadReq
        });
    }
}