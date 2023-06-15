const { sq } = require("../db/db");

const { DataTypes } = require("sequelize");


const Test = sq.define("test", {
    test_id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    Qpaper: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    marks: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Test.sync().then(() => {
    console.log("Test Model synced");
  });

  module.exports = Test;