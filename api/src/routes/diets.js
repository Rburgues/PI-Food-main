const { Router } = require("express");
const { getAllDiets, createDiet } = require("../controlers/diets.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await getAllDiets();

    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {

  const { diet_name } = req.body;

  try {
    const response = await createDiet({ diet_name });
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

module.exports = router;