import React from 'react'
import './Sidebar.css'
import { useDispatch } from "react-redux"
import { FilterDiet } from '../../Redux/action'
import { Link } from 'react-router-dom';



export const ALLTYPE = "ALLTYPE"



export default function Sidebar() {


    let dispatch = useDispatch()
   

    function handleOnChangeType(e) {
        dispatch(FilterDiet(e.target.value))
    }

    function resetAll() {
        window.location.reload()
    }

     
    return (

        <div className='aside'>

            <div className='filterContent'><label>Order by Name</label><br></br><select type='option'><option value="1">Select All</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option></select></div>


            <div className='filterContent'><label>Order by Healthscore</label><br></br><select type='option'><option value="1">Select All</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option></select></div>

            <div className='filterContent'><label>Filter by Diet</label><br></br><select onChange={(e) => handleOnChangeType(e)} type='option'>
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
            <div className='filterContent'><label>Filter By Score</label><br></br><input className='range' type="range" name="points" min="0" max="10" /><br></br>
                <div className='score-text'>
                    <span className='score'>0</span>
                    <span className='score'>25</span>
                    <span className='score'>50</span>
                    <span className='score'>75</span>
                    <span className='score'>100</span>
                </div>
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
