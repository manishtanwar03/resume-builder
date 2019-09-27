const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = process.env.SECERT
console.log(secret);

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

let sequence=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function randomString(length){
    if(length<6)
        length=6;
    str=""
    while(length>=0){
        let index = Math.floor(Math.random()*100)%36;
        str+=sequence[index];
        length--;
    }
    return str;
}
function generateLink(id=''){
    link = randomString(8) + id + randomString(6);
    return link;
}
module.exports.generateHash = generateHash;
module.exports.verifyHash = verifyHash;
module.exports.generateToken = generateToken;
module.exports.verifyToken = verifyToken;
module.exports.generateLink = generateLink;