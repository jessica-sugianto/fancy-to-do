'use strict';
const Password = require('../helpers/password')

module.exports = (sequelize, DataTypes) => {
    const Sequelize = sequelize.Sequelize
    const Model = Sequelize.Model

    class User extends Model {

    }

    User.init({
        username: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    msg: 'Username tidak boleh kosong'
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    msg: 'Password tidak boleh kosong'
                }
            }
        },
        role: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    msg: 'Role tidak boleh kosong'
                }
            }
        }
    }, {
        hooks: {
            beforeCreate: (model, option) => {
                console.log(model.password)
                model.password = Password.hashPassword(model.password)
            }
        },
        sequelize
    })

    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};