const { Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getAllDiets = async () => {

    const apiDiets = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100` //cambiar a 100 al momento del paginado!
    );

    try {
        const data = apiDiets.data.results
        let dietsApi = []
        for (let i = 0; i < data.length; i++) {              
            for (let j = 0; j < data[i].diets.length; j++) {        
                 dietsApi.push(data[i].diets[j][0].toUpperCase() + data[i].diets[j].substr(1))
            }
        }
        const res = new Set(dietsApi);
        let result = [...res];
        return result
        
    } catch (error) {
        return new Error(error)
    }
};




module.exports = {
    getAllDiets,
   }