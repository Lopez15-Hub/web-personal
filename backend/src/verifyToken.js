const Jwt = require('jsonwebtoken');
const Config = require('../../config');

function verifyToken(req,res,next){
    const token = req.headers['x-acess-token'];

    if(!token){
        return res.status(401).json({
            auth:false,
            message: 'no token provided'
        });
    }
    const decoded = Jwt.verify(token, Config.secret);
    req.userId = decoded.id;
    next();
}

module.exports = verifyToken;