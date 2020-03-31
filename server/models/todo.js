'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sequelize = sequelize.Sequelize
    const Model = Sequelize.Model

    class Todo extends Model {

    }

    Todo.init({
        title: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    msg: 'Title tidak boleh kosong'
                }
            }
        },
        description: {
            type: Sequelize.TEXT,
            validate: {
                notEmpty: {
                    msg: 'Description tidak boleh kosong'
                }
            }
        },
        status: {
            type: Sequelize.BOOLEAN,
            validate: {
                notEmpty: {
                    msg: 'Status tidak boleh kosong'
                }
            }
        },
        due_date: {
            type: Sequelize.DATEONLY,
            validate: {
                notEmpty: {
                    msg: 'Due Date tidak boleh kosong'
                }
            }
        },
        UserId: {
            type: Sequelize.INTEGER
        }
    }, { sequelize })

    Todo.associate = function(models) {
        // associations can be defined here
    };
    return Todo;
};