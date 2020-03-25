const  db  = require('../db/db.js');
const Sequelize = require('sequelize');

const TravelerUser = db.define('travelerUser', {
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


module.exports = TravelerUser;