import React from 'react'
import './Home.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allFood } from "../../Redux/action";
import CardRecipe from "../CardRecipe/CardRecipe.jsx";

export default function Home() {
  let dispatch = useDispatch()
  let all_Food = useSelector((state) => state.Food)

  useEffect(() => {
    dispatch(allFood());

  }, [dispatch])


  return (
    <div className="back">
     
        <div className="wrapper" >
          {
            all_Food.map(e => {
              return <CardRecipe
                key={e.id}
                id={e.id}
                name={e.name}                
                image={e.image}

                diets={e.diets.join(" , ")}
                healthScore={e.healthScore} />

            })
          }
        </div>
    </div>

  )
}