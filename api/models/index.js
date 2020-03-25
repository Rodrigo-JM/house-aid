const  db  = require('../db/db');
const Sequelize = require('sequelize');
const HelperUser = require('./helperUser');
const Place = require('./places');
const TravelerUser = require('./travelerUser')


HelperUser.belongsTo(Place);
TravelerUser.belongsTo(Place);

TravelerUser.belongsToMany(HelperUser, {as: 'host', through: 'currentActiveHosts'})



module.exports = {
    db,
    HelperUser,
    Place,
    TravelerUser,
}