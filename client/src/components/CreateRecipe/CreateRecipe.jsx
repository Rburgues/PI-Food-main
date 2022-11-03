import React from 'react'
import './CreateRecipe.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allRecipes } from "../../Redux/action";
import NavVacia from '../NavVacia/NavVacia';



export default function CreateRecipe() {
  let dispatch = useDispatch()
  let all_Recipes = useSelector((state) => state.Recipes)
  const [loading, setLoading] = useState(true);

  if (all_Recipes.length > 0 && loading) {
    setLoading(false);
  }

  useEffect(() => {
    dispatch(allRecipes());

  }, [dispatch])



  return (
    <div className="contentBody">

      <NavVacia />     

      <div className="formContainer" >
        <div></div>
        <div></div>
        <div className='form'><h1>CREATE RECIPE FORM</h1></div>
        <div></div>
        <div></div>


      </div>

    </div>

  )
}