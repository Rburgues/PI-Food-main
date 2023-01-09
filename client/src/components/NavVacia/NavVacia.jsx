import React from 'react'
import s from './NavVacia.module.css'
import logo from '../../images/hf_logo.png'
import faceb from '../../images/faceb.png'
import linkedin from '../../images/linkedin.png'
import exit from '../../images/exit.png'
import { Link } from 'react-router-dom'
import homeIcon from '../../images/home.png'


export default function Nav() {


    return (

        <div className={s.navVacio}>
            <div className={s.logoContentVacio}>
                <Link to={'/home'}>
                    <img className={s.logoVacio} src={logo} alt="Logo" />
                </Link>
            </div>
            <div className={s.btnContent}>
                <Link to='/home'>
                    <button className={s.btnAtras}><img className={s.searchIcon} src={homeIcon} alt="Home Icon"/> BACK TO HOME</button>
                </Link>
            </div>
            <div className={s.social}>
                <a href="https://www.linkedin.com/in/rburgues/" target="_blank" rel="noreferrer">
                    <img className={s.linkedIn} src={linkedin} alt="LinkedIn Icon" />
                </a>
                <a href="https://www.facebook.com/rburguesweb" target="_blank" rel="noreferrer">
                    <img className={s.facebook} src={faceb} alt="Facebook Icon" />
                </a>
               <Link to={'/'}>
                    <img className={s.exit} src={exit} alt="Imagen de salir"/>
                </Link>
            </div>
            <div className={s.recipeContainer}>
           
            </div>

        </div>



    )
}