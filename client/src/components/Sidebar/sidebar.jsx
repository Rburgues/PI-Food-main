import React from 'react'
import './Sidebar.css'

export default function sidebar() {
    return (

        <div className='aside'>

            <div className='filterContent'><label>Order by Name</label><br></br><select type='option'><option value="1">Select All</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option></select></div>


            <div className='filterContent'><label>Filter by Diets</label><br></br><select type='option'><option value="1">Select All</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option></select></div>

            <div className='filterContent'><label>Filter by Name</label><br></br><select type='option'><option value="1">Select All</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option></select></div>

            <div className='filterContent'><label>Filter By Score</label><br></br><input className='range' type="range" name="points" min="0" max="10" /><br></br>
                <div className='score-text'>
                    <span className='score'>0</span>
                    <span className='score'>25</span>
                    <span className='score'>50</span>
                    <span className='score'>75</span>
                    <span className='score'>100</span>
                </div>
            </div>

            <div><button className='btnReset'>Reset All Filters</button></div>
            <div></div>
            <div className='createdby'>Created by:<br></br>
                Richard Burgues</div>
        </div>


    )
}
