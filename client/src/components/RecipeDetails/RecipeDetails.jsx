import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React from 'react'
import { AllID, cleanData } from "../../Redux/action"
import s from './RecipeDetails.module.css'
import Nav from "../NavVacia/NavVacia"
import { Loading } from "../Loading/Loading"



function RecipeDetails() {
  const { id } = useParams()
  let dispatch = useDispatch()

  let recipe = useSelector(state => state.recipeDetails)
  let recipeSteps = recipe.steps
  const [loading, setLoading] = useState(true);
  let num = 1;

  if (Object.keys(recipe).length < 0 && loading) {
    setLoading(false);
  }

  useEffect(() => {
    dispatch(AllID(id))
    dispatch(cleanData(id))
  }, [dispatch, id])

  return (
    <>
      <Nav />
      <div className={s.backDetails}>
        {
          Object.keys(recipe).length > 0 || !loading ? (
            <div className={s.recipeDetail}>
              <div className={s.titleRecipe}>
                <h2 className={s.title}>{recipe.name}</h2>
              </div>
              <div className={s.contImgSummary}>
                <img className={s.imgRecipe} src={recipe.image ? recipe.image : null} alt="Imagen" width="200px" height="250px" />
                <div className={s.summaryText} dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
                <br></br>
              </div>
              <div className={s.contDetails}>
                <h3 className={s.diets}> <span className={s.dietTitle}>Diets:</span> {recipe.diets + ' ' || recipe.diets?.map((el) => el.name)}</h3>
                <h3 className={s.dishTypes}><span className={s.dishtype}>DishType:</span> {recipe.dishTypes ? recipe.dishTypes + ' ' || recipe.dishtypes?.map((el) => el) : "Unspecified dish type"}</h3>
                <h3 className={s.healthS}> Health Score: {recipe.healthScore} </h3>
              </div>
              <div className={s.containerBg}>
                {recipe.steps && recipe.steps.length ? <h4 className={s.summary}>Step by Step:</h4> : <div className={s.noSteps}>No Steps for this recipes!</div>}
                {recipeSteps &&
                  recipeSteps.map((e) => {
                    return (
                      <div className={s.stepsBox} key={e.number}>
                        <h4>{num++}</h4> <div className={s.stepsText}>{e.step}</div>
                      </div>
                    );
                  })}</div>
            </div>
          ) : <Loading />
        }
      </div>
    </>
  )
}

export default RecipeDetails