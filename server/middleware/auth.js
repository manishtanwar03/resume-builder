const jwt = require('jsonwebtoken');

exports = function auth(req, res, next) {
    try {
        const token = req.header('token');
        if (!token) {
            res.status(401).send('access denied, no token provided');
        }
        const payload = jwt.verify(token, 'cGFzc3dvcmRwYXNzd29yZAo');

        // check if the _id extract exists or not, if it exists then pass user id  else send error response.
        next();
    } catch (ex) {
        res.status(401).send('access denied, invalid token provided');
    }
}