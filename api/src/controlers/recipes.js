const axios = require("axios");
const { Recipe, Diet } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;

let dataApi = [];

const getDataApi = async () => {
  try {
    if (dataApi.length > 0) return dataApi;
    const apiRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10` //cambiar a 100 al momento del paginado!
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
        score: recipe.spoonacularScore,
        healthScore: recipe.healthScore,
        image: recipe.image,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree,
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
          attributes: ['diet_name'],
          through: {
            attributes: [],
          },
        },

      ],
    });

    return dbRecipes;
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
  
    if (typeof id === "string" && id.slice(0, 3) === "DBC") {
      let recipeFind = await Recipe.findByPk(id, {
        include: [

          {
            model: Diet,
            attributes: ['diet_name'],
            through: {
              attributes: [],
            },
          },
        ],
      });
      return recipeFind;
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
        score: recipeFind.data.spoonacularScore,
        healthScore: recipeFind.data.healthScore,
        image: recipeFind.data.image,
        vegetarian: recipeFind.data.vegetarian,
        vegan: recipeFind.data.vegan,
        glutenFree: recipeFind.data.glutenFree,
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

const createRecipe = async ({
  name, summary, score, healthScore, image, vegetarian, vegan, glutenFree, steps, diets }) => {

  let res = {
    status: 200,
    msg: "Recipe created!!!",
  };

  if (typeof name !== "string" || name.length < 3) {
    res.status = 404;
    res.msg = "Invaild name, please insert 3 or more characters";
    return res;
  }

  if (typeof summary !== "string" || summary.length < 10) {
    res.status = 404;
    res.msg = "Please insert 10 or more characters";
    return res;
  }

  if (typeof healthScore !== "number" || healthScore > 100) {
    res.status = 404;
    res.msg = "HealtScore is only 0 to 100, please try again";
    return res;
  }

  let newRecipe = await Recipe.create({
    name, summary, score, healthScore, image, vegetarian, vegan, glutenFree, steps, diets
  });

  let dietsFoud = await Diet.findAll({
    where: {
      diet_name: diets,
    },
  });
  newRecipe.addDiet(dietsFoud);
  return res;
};

module.exports = {
  getDataApi,
  getDataDB,
  getAllRecipes,
  getRecipeID,
  createRecipe
};
