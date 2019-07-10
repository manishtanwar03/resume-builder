var bcrypt = require('bcryptjs');
//npm i bcryptjs --save
function generateHash(password){
    return bcrypt.hashSync(password);
}

module.exports = generateHash;

// , bcrypt.genSaltSync(9)