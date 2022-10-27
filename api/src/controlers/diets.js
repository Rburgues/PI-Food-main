const { Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getApiDiets = async () => {

    const apiDiets = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10` //cambiar a 100 al momento del paginado!
    );

    try {
        const data = apiDiets.data.results
        let dietsApi = []
        for (let i = 0; i < data.length; i++) {               // Bucle exterior
            for (let j = 0; j < data[i].diets.length; j++) {         // Bucle interior
                //    console.log(results[i].diets[j])
                dietsApi.push(data[i].diets[j])
            }
        }
        const res = new Set(dietsApi);
        let result = [...res];
        return result
    } catch (error) {
        return new Error(error)
    }
};


const getDbDiets = async () => {

    try {
        let dietsDb = [];
        const dBDiets = await Diet.findAll();
        for (let index = 0; index < dBDiets.length; index++) {
            const element = dBDiets[index];
            dietsDb.push(element.diet_name)
            console.log(element.diet_name)
        }
        
        return dietsDb

    } catch (error) {
        return new Error(error)
    }
};

const getAllDiets = async () => {

    const apiInfo = await getApiDiets();
    const dbInfo = await getDbDiets();

    let allData = [];
    if (dbInfo || apiInfo) {
        allData = [...dbInfo, ...apiInfo]
    } else {
        return {
            msg: "The data it's empty"
        }
    }
    return allData;
};

const createDiet = async ({ diet_name }) => {

    let res = {
        status: 200,
        msg: "New Diet created!!!",
    };

    if (typeof diet_name !== "string" || diet_name.length < 5) {
        res.status = 404;
        res.msg = "Invaild Diet Name, please insert 5 or more characters";
        return res;
    }

    let dietsFoud = await Diet.findAll({
        where: {
            diet_name: diet_name,
        },
    });

    if (typeof diet_name === dietsFoud) {
        res.status = 404;
        res.msg = "This Diet already exists";
        return res;
    } else {

        let dietToAdd = {
            diet_name,
        };
        const newDiet = await Diet.create(dietToAdd);
        return res;
    }

};

module.exports = {
    getAllDiets,
    getApiDiets,
    getDbDiets,
    createDiet
}