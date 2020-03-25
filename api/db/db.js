const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/health-aid', {
    logging: false,
});

module.exports = db