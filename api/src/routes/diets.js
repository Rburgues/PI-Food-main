const { Router } = require("express");
const {
  getDiets, 
} = require("../controlers/diets.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await getDiets();

    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});


module.exports = router;