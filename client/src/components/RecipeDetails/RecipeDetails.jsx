import { useDispatch, useSelector } from "react-redux"

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import React from 'react'
import { AllID, resetData } from "../../Redux/action"

import './RecipeDetails.css'
import Nav from "../NavVacia/NavVacia"
import { Loading } from "../Loading/Loading"



function RecipeDetails() {
  const { id } = useParams()
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(AllID(id))
  }, [dispatch])

  let recipe = useSelector(state => state.RecipeDetails)
  let recipeSteps = recipe.steps
  const [loading, setLoading] = useState(true);
  

  if ( RecipeDetails.name.length < 0 && loading) {
    setLoading(false);
  }


  return (
    <>
      <Nav />
      <div className="backDetails">   


        {
          RecipeDetails.name.length > 0 || !loading ? (

          <div className="recipeDetail">

            
            <div className="titleRecipe">
              <h2 className="title">{recipe.name}</h2>
            </div>
            <div className="contImgSummary">
              <img className="imgRecipe" src={recipe.image ? recipe.image : "https://steamuserimages-a.akamaihd.net/ugc/844842639220145572/84F945A992EA069EF8FD6D77BF5E644A937D3589/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"} alt="Imagen" width="200px" height="250px" />
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
          ):  <Loading />
             
        }
      </div>
    </>
  )
}

export default RecipeDetails