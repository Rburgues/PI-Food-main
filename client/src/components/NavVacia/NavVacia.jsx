import React from 'react'
import './NavVacia.css'

import logo from '../../images/hf_logo.png'
import addRecipe from '../../images/addRecipe.png'
import { Link } from 'react-router-dom'
import homeIcon from '../../images/home.png'


export default function Nav() {


    return (

        <div className='navVacio'>
            <div className='logoContentVacio'>
                <Link to={'/home'}>
                    <img className='logoVacio' src={logo} />
                </Link>
            </div>
            <div className='btnContent'>
                <Link to='/home'>
                    <button className='btnAtras'><img className='searchIcon' src={homeIcon} /> BACK TO HOME</button>
                </Link>
            </div>
            <div className='recipeContainer'>
            <Link to={'/recipe'}>
            <img className='addRecipe' src={addRecipe} />
            </Link>
            </div>

        </div>



    )
}