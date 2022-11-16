import React from 'react'
import s from './Sidebar.module.css'
import { useDispatch, useSelector } from "react-redux"
import { filterDiet, filterByCreate, orderByName, orderByHealthScore, dietsList, cleanData } from '../../Redux/action'
import { useState, useEffect } from 'react';
import recipeIcon from '../../images/recipeIcon.png'
import { Link } from 'react-router-dom';


export const ALLTYPE = "ALLTYPE"


export default function Sidebar() {

    const dispatch = useDispatch()
    const [order, setOrder] = useState('')

    const dietList = useSelector((state) => state.dietList);

    useEffect(() => {
        dispatch(dietsList())
           }, [dispatch])

    function handleOnChangeDiet(e) {
        e.preventDefault();
        dispatch(filterDiet(e.target.value))
    }

    function handleSortName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setOrder(e.target.value)
    }

    function handleHealthScore(e) {
        e.preventDefault();
        dispatch(orderByHealthScore(e.target.value))
        setOrder(e.target.value)
    }

    function handleCreated(e) {
        e.preventDefault();
        dispatch(filterByCreate(e.target.value))
        setOrder(e.target.value)
        dispatch(cleanData())
    }

    function resetAll() {
        window.location.reload()
    }

    return (

        <div className={s.aside}>
               <div className={s.titleRecipes}>
                Recipes  Menu
                </div>

            <Link to="/recipe">
                <div className={s.addRecipe}>
                    <img className={s.btnIcon} src={recipeIcon} />Create Recipe
                </div>
            </Link>
            
                <div className={s.titleFilters}>
                Sorting & Filters
                </div>
            
            <div className={s.filterContent}><label>Filter by Diet</label><br></br><select onChange={(e) => handleOnChangeDiet(e)} type='option'>
                <option value={ALLTYPE}>Select All</option>
                {dietList?.map(e => 
                    <option key={e} value={e}>{e}</option>)}
            </select>
            </div>

            <div className={s.filterContent}><label>Order by Name</label><br></br><select onChange={(e) => handleSortName(e)} type='option'><option value="1">Select All</option>
                <option value="AZ">Order A to Z</option>
                <option value="ZA">Order Z to A</option></select></div>


            <div className={s.filterContent}><label>Order by Healthscore</label><br></br><select onChange={(e) => handleHealthScore(e)} type='option'><option value="1">Select All</option>
                <option value="0-100">Order 0 to 100</option>
                <option value="100-0">Order 100 to 0</option></select>
            </div>

            <div className={s.filterContent}><label>Origin Recipes</label><br></br><select onChange={(e) => handleCreated(e)} type='option'><option value="ALL">Select All</option>
                <option value="spoonacular">Spoonacular</option>
                <option value="createdInDb">Database</option></select>
            </div>


            <div className={s.titleDefault}>
            Default Values
            </div>

            <div>

                <button className={s.btnReset} onClick={() => resetAll()} >Reset All Filters</button>

            </div>

            <div className={s.createdby}>Created by:<br></br>
                Richard Burgues</div>
        </div>
    )
}
