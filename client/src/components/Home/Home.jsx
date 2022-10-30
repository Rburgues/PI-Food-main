import React from 'react'
import './Home.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allFood } from "../../Redux/action";
import CardRecipe from "../CardRecipe/CardRecipe.jsx";
import logo from '../../images/hf_logo.png'


export default function Home() {
  let dispatch = useDispatch()
  let all_Food = useSelector((state) => state.Food)
  const data = localStorage.getItem('response')
 const user = (JSON.parse(data))

  useEffect(() => {
    dispatch(allFood());

  }, [dispatch])
  
  
  
  return (
    <div className="back">
      
     <div className='nav'>
      <img className='logo' src={logo}/>
      <div className='nombre'>Bienvenido <br></br>{user.profileObj.name}<img className='userimage' src={user.profileObj.imageUrl}/></div>
      
     </div>

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