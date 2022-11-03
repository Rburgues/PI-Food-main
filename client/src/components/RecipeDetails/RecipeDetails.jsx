import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { useEffect } from "react"

import { useParams } from "react-router-dom"

import React from 'react'
import {AllID} from "../../Redux/action"

import './RecipeDetails.css'
import Nav from "../NavVacia/NavVacia"
import Sidebar from "../Sidebar/Sidebar"



function RecipeDetails() {
    const {id}= useParams()
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(AllID(id))
    },[dispatch]) 

    let recipe = useSelector(state => state.RecipeDetails) 
    

  return (
       <div className="back">
        
        <Nav/>
        <Sidebar/>
          {
          <div className="recipeDetail">
            
            <img className="imgRecipe" src={recipe.image ? recipe.image : "https://canalcocina.es/medias/_cache/zoom-7633d99ea9677004a4988e94e5d30aa0-920-518.jpg"} alt="Imagen" width="200px" height="250px" />
            
            <h2 className="title">{recipe.title}</h2>
            {recipe.type ? <h3 className="type">Type: {recipe.type.map(e=>e.name).join(", ")} </h3> : null} 

            <h3 className="diets"> Diets: {recipe.diets ? recipe.diets.map(e=>e.name).join(", ") : "Diets not found"}  </h3>
            <h3 className="health"> Health Score: {recipe.healthScore} </h3>
           
            
            <h4 className="summary">Summary:</h4>
            <h4 dangerouslySetInnerHTML={{__html: recipe.summary}}></h4> 
            
            {recipe.analyzedInstructions && recipe.analyzedInstructions.length ? <h4 className="summary">Step by Step:</h4> : null} 
  
            {recipe.analyzedInstructions ? <h4 > {Array.isArray(recipe.analyzedInstructions) ? recipe.analyzedInstructions.map(e => e.steps.map(f => f.step)) : recipe.analyzedInstructions }</h4>:null}
          </div>
    
 
  }
  </div>
  )
}

export default RecipeDetails