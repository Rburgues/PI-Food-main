import React from 'react'
import s from './NavVacia.module.css'
import logo from '../../images/hf_logo.png'
import recipeIcon from '../../images/recipeIcon.png'
import { Link } from 'react-router-dom'
import homeIcon from '../../images/home.png'


export default function Nav() {


    return (

        <div className={s.navVacio}>
            <div className={s.logoContentVacio}>
                <Link to={'/home'}>
                    <img className={s.logoVacio} src={logo} />
                </Link>
            </div>
            <div className={s.btnContent}>
                <Link to='/home'>
                    <button className={s.btnAtras}><img className={s.searchIcon} src={homeIcon} /> BACK TO HOME</button>
                </Link>
            </div>
            <div className={s.recipeContainer}>
           
            </div>

        </div>



    )
}