const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { getAllRecipes, getRecipeID, createRecipe } = require("../controlers/recipes");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getAllRecipes(name);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
    // console.error(error)   
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getRecipeID(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const {
    name, summary, healthScore, image, steps, diets } = req.body;

  try {
    let newRecipe = await Recipe.create({
      name, summary, healthScore, image, steps
    });

    let dietFound = await Diet.findAll({
      where: {
        name: diets,
      },
    });
    newRecipe.addDiet(dietFound);
    res.json({ message:'Recipe created' })
  }
  catch (error) {
    console.log(error)
  }

})


module.exports = router;