const { Router } = require('express');
const Sequelize = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require('./recipes.js')
const diets = require('./diets.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipes);
router.use('/recipe', recipes);
router.use('/diets', diets);
router.use('/dietas', diets);
module.exports = router;
