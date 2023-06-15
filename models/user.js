const { sq } = require("../db/db");

const { DataTypes } = require("sequelize");


const User = sq.define("user", {
    user_id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  User.sync().then(() => {
    console.log("User Model synced");
  });

  module.exports = User;