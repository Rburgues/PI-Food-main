const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('diet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      dbCreated: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
  },{
      timestamps: false
  });
}