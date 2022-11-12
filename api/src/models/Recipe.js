const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
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
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    glutenFree: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
