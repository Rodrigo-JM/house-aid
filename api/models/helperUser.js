const  db  = require('../db/db');
const Sequelize = require('sequelize')


const HelperUser = db.define('HelperUser', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tested: {
        type: Sequelize.BOOLEAN,
    },
    isSick: {
        type: Sequelize.BOOLEAN,
    }
    
})


module.exports = HelperUser