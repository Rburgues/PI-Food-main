const axios = require("axios");
const { Recipe, Diet } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;

let dataApi = [];
let dataDB = [];

const getDataApi = async () => {
  try {
    if (dataApi.length > 0) return dataApi;
    const apiRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100` //cambiar a 100 al momento del paginado!
    );

    apiRecipes.data.results.map((recipe) => {
      let newSteps = [];
      if (recipe.analyzedInstructions[0] !== undefined) {
        let count = recipe.analyzedInstructions[0].steps.length;
        for (let i = 0; i < count; i++) {
          let stepToAdd = {
            number: recipe.analyzedInstructions[0].steps[i].number,
            step: recipe.analyzedInstructions[0].steps[i].step,
          };
          newSteps.push(stepToAdd);
        }
      } else {
        stepToAdd = {
          number: 1,
          step: "No exists steps for this recipe",
        };
        newSteps.push(stepToAdd);
      }
      let newRecipe = {
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        image: recipe.image,
        steps: newSteps,
        diets: recipe.diets,
        dbCreated: false,
      };
      dataApi.push(newRecipe);
    });
    return dataApi;
  } catch (error) {
    console.error(error);
    return new Error(error);
  }
};

const getDataDB = async () => {
  try {

    const dbRecipes = await Recipe.findAll({

      include: [

        {
          model: Diet,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },

      ],
    });

    dbRecipes.map((recipe) => {
      let newSteps = [];
      if (recipe.steps !== undefined) {
        let count = recipe.steps.length;
        for (let i = 0; i < count; i++) {
          let stepToAdd = {
            number: recipe.steps[i].number,
            step: recipe.steps[i].step,
          };
          newSteps.push(stepToAdd);
        }
      } else {
        stepToAdd = {
          number: 1,
          step: "No exists steps for this recipe",
        };
        newSteps.push(stepToAdd);
      }
      let newRecipe = {
        id: recipe.id,
        name: recipe.name,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        image: recipe.image,
        steps: newSteps,
        diets: recipe.diets.map(e => e.name).join(', '),
        dbCreated: false,
      };
      dataDB.push(newRecipe);
    });
    
    let obj = {};
   return dataDB = dataDB.filter(o => obj[o.id] ? false : obj[o.id] = true);

  } catch (error) {
    return new Error(error);
  }
};

const getAllRecipes = async (name) => {
  try {
    const apiInfo = await getDataApi();
    const dbInfo = await getDataDB();

    let allData = [];

    if (apiInfo || dbInfo) {
      allData = [...apiInfo, ...dbInfo]
    } else {
      return {
        msg: "The data it's empty"
      }
    }

    if (typeof name === "string" && name.length > 0) {
      let recipeToFind = allData.filter((Recipe) => {
        return Recipe.name.toLowerCase().includes(name.toLowerCase());
      });
      if (recipeToFind.length === 0) {
        return {
          msg: "We are sorry the searched recipe is not in the database",
        };
      } else {
        return recipeToFind;
      }
    }
    return allData;
  } catch (error) {
    return new Error(error);
  }
};

const getRecipeID = async (id) => {
  try {

    if (id.length > 10) {
      let recipeFind = await Recipe.findByPk(id, {
        include: [

          {
            model: Diet,
            attributes: ['name'],
            through: {
              attributes: [],
            },
          },
        ],
      });

      let newSteps = [];
      if (recipeFind.steps !== undefined) {
        let count = recipeFind.steps.length;
        for (let i = 0; i < count; i++) {
          let stepToAdd = {
            number: recipeFind.steps[i].number,
            step: recipeFind.steps[i].step,
          };
          newSteps.push(stepToAdd);
        }
      } else {
        stepToAdd = {
          number: 1,
          step: "there is no steps listed for this recipe",
        };
        newSteps.push(stepToAdd);
      }

      let response = {
        id: recipeFind.id,
        name: recipeFind.title,
        summary: recipeFind.summary,
        healthScore: recipeFind.healthScore,
        image: recipeFind.image,
        steps: newSteps,
        diets: recipeFind.diets.map(e => e.name).join(', '),
        dbCreated: false,
      };

      return response;

    } else {
      let recipeFind = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );

      let newSteps = [];
      if (recipeFind.data.analyzedInstructions[0] !== undefined) {
        let count = recipeFind.data.analyzedInstructions[0].steps.length;
        for (let i = 0; i < count; i++) {
          let stepToAdd = {
            number: recipeFind.data.analyzedInstructions[0].steps[i].number,
            step: recipeFind.data.analyzedInstructions[0].steps[i].step,
          };
          newSteps.push(stepToAdd);
        }
      } else {
        stepToAdd = {
          number: 1,
          step: "there is no steps listed for this recipe",
        };
        newSteps.push(stepToAdd);
      }
      let response = {
        id: recipeFind.data.id,
        name: recipeFind.data.title,
        summary: recipeFind.data.summary,
        healthScore: recipeFind.data.healthScore,
        image: recipeFind.data.image,
        steps: newSteps,
        diets: recipeFind.data.diets,
        dbCreated: false,
      };

      return response;
    }
  } catch (error) {
    return new Error(error);
  }
};

module.exports = {
  getDataApi,
  getDataDB,
  getAllRecipes,
  getRecipeID,

};
