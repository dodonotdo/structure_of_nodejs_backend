const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const user_details_table = sequelize.define("user_details", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  mobile_no: {
    type: Sequelize.BIGINT(11),
    allowNull: false,
  },

  createdAt: {
    type: Sequelize.DATEONLY,
  },

  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = user_details_table;
