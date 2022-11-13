const axios = require("axios");
require("dotenv").config();
const { Diet } = require('../db');
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
                dietsApi.push(data[i].diets[j])
            }
        }
        const res = new Set(dietsApi);
        let result = [...res];

        result.forEach((e) => {
            Diet.findOrCreate({
                where: {
                    name: e
                }
            })
        })
        const finalAllDiets = await Diet.findAll()
        const mapDiets = finalAllDiets.map(e => e.dataValues.name)
        //console.log(finalAllDiets)
        //console.log(prueba)
        // res.send(mapDiets);
        return mapDiets

    } catch (error) {
        return new Error(error)
    }
};




module.exports = {
    getAllDiets,
}