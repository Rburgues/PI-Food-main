import React from 'react'
import './Nav.css'

import logo from '../../images/hf_logo.png'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'


export default function Nav() {

   
    return (

        <div className='nav'>
            <div className='logoContent'>
            <Link to={'/home'}>
                <img className='logo' src={logo} />
            </Link>
            </div>
            <Search/>
            <div className='nombre'>Crear <br></br>Receta</div>

        </div>



    )
}