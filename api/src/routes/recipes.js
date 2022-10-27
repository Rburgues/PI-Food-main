const { Router } = require("express");
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
    name, summary, score, healthScore, image, vegetarian, vegan, glutenFree, steps, diets } = req.body;

  const response = await createRecipe({
    name, summary, score, healthScore, image, vegetarian, vegan, glutenFree, steps, diets });
    res.status(response.status).send(response.msg);
});


module.exports = router;