import React from 'react'
import s from './Home.module.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allRecipes } from "../../Redux/action";
import CardRecipe from "../CardRecipe/CardRecipe.jsx";
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/sidebar';
import { Loading } from '../Loading/Loading';
import { ErrorPage } from '../404/ErrorPage';
import { Paginacion } from '../Paginacion/Paginacion.jsx';



export default function Home() {
  let dispatch = useDispatch()
  let all_Recipes = useSelector((state) => state.recipes)
  const [loading, setLoading] = useState(true);
  

  if (all_Recipes.length > 0 && loading) {
    setLoading(false);
  }

  const [pagina, setPagina] = useState(1)
  const porPagina = 9
  const indexOfUltimareceta = pagina * porPagina
  const indexOfPrimerareceta = indexOfUltimareceta - porPagina
  const currentRecetas = Array.from(all_Recipes).slice(indexOfPrimerareceta, indexOfUltimareceta)
  const maximo = all_Recipes.length / porPagina

  const paginado = (numeroDePagina) => {
    setPagina(numeroDePagina)
  }


  useEffect(() => {
    dispatch(allRecipes())
       }, [dispatch])



  return (
    <div className={s.backHome}>

      <Nav />
      <Sidebar />

      <div className={s.wrapper} >

        {
          currentRecetas.length > 0 && !loading ? (
            currentRecetas.map(e => {

              return (
                <CardRecipe
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  image={e.image}
                  diets={e.diets}
                  healthScore={e.healthScore} />
              )
            })

          ) : !currentRecetas.length > 0 && loading ? (
            <div className={s.loading} ><Loading /></div>
          ) : (
            <div className={s.error404} ><ErrorPage /></div>
          )

        }
        <div></div>{
        <div className={s.paginationHome}>
          <Paginacion
            porPagina={porPagina}
            all_Recipes={all_Recipes.length}
            pagina={pagina}
            paginado={paginado}
            setPagina={setPagina}
            maximo={maximo}
          />
        </div>}
        
      </div>

    </div>

  )
}