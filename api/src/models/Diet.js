const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    diet_name: {
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