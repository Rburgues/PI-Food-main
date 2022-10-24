const { Router } = require("express");
const { createRecipe, deleteRecipe } = require("../controlers/recipe");
const { Recipe, Diet } = require("../db");

const router = Router();


router.post("/", async (req, res) => {
  const {
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
  } = req.body;

  const findEqual = await Recipe.findByPk(id)
  if (findEqual) {
    res.status(400).send('That ID allready exist in DB')
    return;
  };

  const response = await createRecipe({
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
  });
  res.status(response.status).send(response.msg);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  
  const findIdToDelet = await Recipe.findByPk(id)
  if (findIdToDelet) {
    const response = await deleteRecipe(id)
    res.status(response.status).send(response.msg)
  } else {
    res.status(400).send("Recipe can not be found in Data base")
  }
})

module.exports = router;
