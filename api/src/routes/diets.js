const { Router } = require("express");
require("dotenv").config();
const { Diet } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios');
const router = Router();

router.get("/", async (req, res) => {
  const apiDiets = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100` //cambiar a 100 al momento del paginado!
  );

  let dietTypes = []
  const apiInfo = apiDiets.data

  apiInfo.results.map(e => e.diets.forEach(el => {
    if (!dietTypes.includes(el)) {
      dietTypes = dietTypes.concat(el)
    }
  }))
  dietTypes.forEach((e) => {
    Diet.findOrCreate({
      where: {
        name: e
      }
    })
  })

  const finalAllDiets = await Diet.findAll()
  const mapDiets = finalAllDiets.map(e => e.dataValues.name)
  res.send(mapDiets);


});


module.exports = router;