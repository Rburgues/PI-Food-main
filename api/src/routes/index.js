const { Router } = require('express');
const Sequelize = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require('./recipes.js')
const recipe = require('./recipe.js')
const diets = require('./diets.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get('/', async (req, res) => {    
//     res.send('to get info from this api please go to <a href="http://localhost:3001/recipes/" >"http://localhost:3001/recipes/"</a> or <a href="http://localhost:/diets/" >"http://localhost:/diets/"</a>');
// });


router.use('/recipes', recipes);
router.use('/recipe', recipe);
router.use('/diets', diets);

module.exports = router;
