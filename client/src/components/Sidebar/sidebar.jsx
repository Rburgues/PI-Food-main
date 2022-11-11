import React from 'react'
import './Sidebar.css'
import { useDispatch, useSelector } from "react-redux"
import { filterDiet, orderByName, orderByHealthScore, dietsList } from '../../Redux/action'
import { useState, useEffect } from 'react';
import recipeIcon from '../../images/recipeIcon.png'
import { Link } from 'react-router-dom';


export const ALLTYPE = "ALLTYPE"


export default function Sidebar() {

    const dispatch = useDispatch()
    const [order, setOrder] = useState('')

    const dietList = useSelector((state) => state.DietList);

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

    function resetAll() {
        window.location.reload()
    }

    return (

        <div className='aside'>

               <div className='titleRecipes'>
                Recipes  Menu
                </div>

            <Link to="/recipe">
                <div className='addRecipe'>
                    <img className='btnIcon' src={recipeIcon} />Create Recipe
                </div>
            </Link>
            
                <div className='titleFilters'>
                Sorting & Filters
                </div>
            
            <div className='filterContent'><label>Filter by Diet</label><br></br><select onChange={(e) => handleOnChangeDiet(e)} type='option'>
                <option value={ALLTYPE}>Select All</option>
                {dietList?.map(e => 
                    <option key={e} value={e}>{e}</option>)}
            </select>
            </div>

            <div className='filterContent'><label>Order by Name</label><br></br><select onChange={(e) => handleSortName(e)} type='option'><option value="1">Select All</option>
                <option value="AZ">Order A to Z</option>
                <option value="ZA">Order Z to A</option></select></div>


            <div className='filterContent'><label>Order by Healthscore</label><br></br><select onChange={(e) => handleHealthScore(e)} type='option'><option value="1">Select All</option>
                <option value="0-100">Order 0 to 100</option>
                <option value="100-0">Order 100 to 0</option></select>
            </div>


            <div className='titleDefault'>
            Default Values
            </div>

            <div>

                <button className='btnReset' onClick={() => resetAll()} >Reset All Filters</button>

            </div>


           
            <div></div>
            



            <div className='createdby'>Created by:<br></br>
                Richard Burgues</div>


        </div>
    )
}
