import React from 'react'
import './Home.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allFood } from "../../Redux/action";
import CardRecipe from "../CardRecipe/CardRecipe.jsx";
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import { Loading } from '../Loading/Loading';


export default function Home() {
  let dispatch = useDispatch()
  let all_Food = useSelector((state) => state.Food)
  

  useEffect(() => {
    dispatch(allFood());
  
  }, [dispatch])
  
  
  
  return (
    <div className="back">
      
    <Nav/>
    <Sidebar/>
   
       
          {
            all_Food.length > 0 ? <div className="wrapper" > {all_Food.map(e => {
              return <CardRecipe
                key={e.id}
                id={e.id}
                name={e.name}                
                image={e.image}

                diets={e.diets.join(" , ")}
                healthScore={e.healthScore} />
           
            }) 
          
           }
           
          
        </div> :  <Loading/>}
     
    </div>

  )
}