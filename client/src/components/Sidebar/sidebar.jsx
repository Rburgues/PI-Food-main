import React from 'react'
import './Sidebar.css'
import { useDispatch } from "react-redux"
import { FilterDiet, orderByName, orderByHealthScore } from '../../Redux/action'
import { useState } from 'react';



export const ALLTYPE = "ALLTYPE"



export default function Sidebar() {

    const dispatch = useDispatch()
    const [order, setOrder] = useState('')

    function handleOnChangeDiet(e) {
        e.preventDefault();
        dispatch(FilterDiet(e.target.value))
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

            <div>
                <h2>FILTROS</h2>
            </div>

            <div className='filterContent'><label>Filter by Diet</label><br></br><select onChange={(e) => handleOnChangeDiet(e)} type='option'>
                <option value={ALLTYPE}>Select All</option>
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="primal">Primal</option>
                <option value="vegan">Vegan</option>
                <option value="whole 30">Whole 30</option>
            </select>
            </div>

            <div className='filterContent'><label>Order by Name</label><br></br><select onChange={(e) => handleSortName(e)} type='option'><option value="1">Select All</option>
                <option value="AZ">Order A to Z</option>
                <option value="ZA">Order Z to A</option></select></div>


            <div className='filterContent'><label>Order by Healthscore</label><br></br><select onChange={(e) => handleHealthScore(e)} type='option'><option value="1">Select All</option>
                <option value="0-100">Order 0 to 100</option>
                <option value="100-0">Order 100 to 0</option></select>
            </div>




            <div>

                <button className='btnReset' onClick={() => resetAll()} >Reset All Filters</button>

            </div>

            <div></div>
            <div></div>
            <div></div>
            

            <div className='createdby'>Created by:<br></br>
                Richard Burgues</div>


        </div>
    )
}
