const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next)
{
    const token = req.header('token');
    if(!token) return res.status(401).send('Access denied. No token provided');

    try{
        const decoded = jwt.verify(token, '@#$Dadfsfsa#@$@#');
        req.result = decoded;   /////
    
        next();
    }
    catch (ex)
    {
        res.status(400).send('Invalid token.');
    }
}
