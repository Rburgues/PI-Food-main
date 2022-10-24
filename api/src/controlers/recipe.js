const axios = require("axios");
const { Recipe, Diet} = require("../db");
const Sequelize = require("sequelize");

const createRecipe = async ({
  id,
  name,
  summary,
  score,
  healthScore,
  image,
  vegetarian,
  vegan,
  glutenFree,
  steps,
  diets,
}) => {
  let response = {
    status: 200,
    msg: "Recipe has been created successfully!!! ;)",
  };
  if (typeof id !== "string" || id.slice(0, 3) !== "DBC") {
    response.status = 404;
    response.msg = "Id is not valid, recipe has not been created";
    return response;
  }

  if (typeof name !== "string" || name.length < 3) {
    response.status = 404;
    response.msg = "Name is not valid, recipe has not been created";
    return response;
  }

  if (typeof summary !== "string" || summary.length < 10) {
    response.status = 404;
    response.msg = "Summary is not valid, recipe has not been created";
    return response;
  }

  if (typeof healthScore !== "number" || healthScore > 100) {
    response.status = 404;
    response.msg = "HealtScore is not valid, recipe has not been created";
    return response;
  }

  let newRecipe = await Recipe.create({
    id,
    name,
    summary,
    score,
    healthScore,
    image,
    vegetarian,
    vegan,
    glutenFree,
    steps,
  });

  let dietsFoud = await Diet.findAll({
    where: {
      diet_name: diets,
    },
  });
  newRecipe.addDiet(dietsFoud);

  return response;
};

const deleteRecipe = async (id) => {
  let response = {
    status: 200,
    msg: "Recipe has been deleted successfully!!! ;)",
  };
  console.log(id)
  if (typeof id !== "string" || id.slice(0, 3) !== "DBC") {
    response.status = 404;
    response.msg = "Id is not valid, recipe has not been deleted";
    return response;
  }

  let recipeToDelete = await Recipe.destroy({
    where: { id : id }
  })
  if(recipeToDelete === 1){
    return response
  } else {
    response.status = 404;
    response.msg = "Recipe not found";
    return response;
  }

}

module.exports = {
  createRecipe,
  deleteRecipe
}