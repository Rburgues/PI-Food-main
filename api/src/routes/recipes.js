const { Router } = require("express");
const { getAllRecipes, getRecipeById } = require("../controlers/recipes");
const { Recipe, Diet, Cuisine, DishType } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getAllRecipes(name);
    res.status(200).send(response);
  } catch (error) {
    console.error(error)
    res.status(404).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getRecipeById(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

module.exports = router;