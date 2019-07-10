const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = 'cGFzc3dvcmRwYXNzd29yZAo';

function generateHash(password) {
    return bcrypt.hashSync(password);
}

function verifyHash(password, hash) {
    return bcrypt.compare(password, hash);
}

function generateToken(payload) {
    return jwt.sign(payload, secret);
}

function verifyToken(token) {
    return jwt.verify(token, secret);
}

module.exports.generateHash = generateHash;
module.exports.verifyHash = verifyHash;
module.exports.generateToken = generateToken;
module.exports.verifyToken = verifyToken;