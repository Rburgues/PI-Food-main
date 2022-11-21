const { DataTypes, UUIDV4, INTEGER } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type:  DataTypes.INTEGER,
      allowNull: false,
    },
    dishTypes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
    dbCreated: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }

  }, {
    timestamps: false,
    createdAt: true,
  });
};
