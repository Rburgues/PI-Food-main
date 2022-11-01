import React from 'react'
import './Home.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allRecipes } from "../../Redux/action";
import CardRecipe from "../CardRecipe/CardRecipe.jsx";
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import { Loading } from '../Loading/Loading';
import { ErrorPage } from '../404/ErrorPage';



export default function Home() {
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
    <div className="back">

      <Nav />
      <Sidebar />

      <div className="wrapper" >

      {
    all_Recipes.length > 0 && !loading ? (
      all_Recipes.map(e => {

        return (
          <CardRecipe
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.image}
            diets={e.diets.join(" , ")}
            healthScore={e.healthScore} />
        )
      })
    ) : !all_Recipes.length > 0 && loading ? (
      <div className="loading" ><Loading /></div>
    ) : (
      <div className="error404" ><ErrorPage /></div>
    )
  }


{/* 
        {all_Recipes.length > 0 ? <div className="wrapper" > {all_Recipes.map(e => {
          return <CardRecipe
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.image}
            diets={e.diets.join(" , ")}
            healthScore={e.healthScore} />

        })

        }


        </div> : <Loading /> || <div className="error404" ><ErrorPage /></div>} */}

      </div>

    </div>

  )
}