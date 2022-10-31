import React from 'react'
import './Nav.css'

import logo from '../../images/hf_logo.png'
import { Link } from 'react-router-dom'


export default function Nav() {

   
    return (

        <div className='nav'>
            <div className='logoContent'>
            <Link to={'/home'}>
                <img className='logo' src={logo} />
            </Link>
            </div>
            <div className='nombre'>Crear <br></br>Receta</div>

        </div>



    )
}