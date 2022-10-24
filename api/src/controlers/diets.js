const Sequelize = require('sequelize');
const { Diet } = require("../db");

const getDiets = async () => {
    try {
        const allDiets = await Diet.findAll();
        return allDiets

    } catch (error) {
        return new Error(error)
    }
};

module.exports = {  
    getDiets,
  }