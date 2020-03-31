const bcrypt = require('bcryptjs')
const saltRound = 10;

class Password {
    static hashPassword(password) {
        let salt = bcrypt.genSaltSync(saltRound)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    }

    static checkPassword(passLogin, pass) {
        return bcrypt.compareSync(passLogin, pass)
    }
}

module.exports = Password