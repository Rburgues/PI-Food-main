import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { useEffect } from "react"

import { useParams } from "react-router-dom"

import React from 'react'
import { AllID } from "../../Redux/action"

import './RecipeDetails.css'
import Nav from "../NavVacia/NavVacia"



function RecipeDetails() {
  const { id } = useParams()
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(AllID(id))
  }, [dispatch])

  let recipe = useSelector(state => state.RecipeDetails)
  let recipeSteps = recipe.steps


  return (
    <>
<Nav />
    <div className="backDetails">

      

      {
        <div className="recipeDetail">
          <div className="titleRecipe">
            <h2 className="title">{recipe.name}</h2>
          </div>
          <div className="contImgSummary">
            <img className="imgRecipe" src={recipe.image ? recipe.image : "https://canalcocina.es/medias/_cache/zoom-7633d99ea9677004a4988e94e5d30aa0-920-518.jpg"} alt="Imagen" width="200px" height="250px" />
            <div className="summaryText" dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
          <br></br>
          </div>

          <div className="contDetails">
        
            <h3 className="diets"> Diets: {recipe.diets ? recipe.diets.join(", ") : "Diets not found"}</h3>
            <h3 className="healthS"> Health Score: {recipe.healthScore} </h3>
          </div>

          <div className="containerBg">
            {recipe.steps && recipe.steps.length ? <h4 className="summary">Step by Step:</h4> : null}
            {recipeSteps &&
              recipeSteps.map((e) => {
                return (
                  <div className="stepsBox" key={e.number}>
                    <h4>{e.number}</h4> <div className="stepsText">{e.step}</div>

                  </div>
                );
              })}</div>
        </div>

      }
    </div>
    </>
  )
}

export default RecipeDetails