import s from './Nav.module.css'
import logo from '../../images/hf_logo.png'
import faceb from '../../images/faceb.png'
import linkedin from '../../images/linkedin.png'
import exit from '../../images/exit.png'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import React from 'react'


export default function Nav() {

    function logoClick() {
        window.location.reload()
    }

    return (

        <div className={s.nav}>
            <div className={s.logoContent}>
                <Link to={'/home'}>
                    <img className={s.logo} onClick={() => logoClick()} src={logo} />
                </Link>
            </div>
            <Search />
            <div className={s.social}>
                <a href="https://www.linkedin.com/in/rburgues/" target="_blank">
                    <img className={s.linkedIn} src={linkedin} />
                </a>
                <a href="https://www.facebook.com/rburguesweb" target="_blank">
                    <img className={s.facebook} src={faceb} />
                </a>
               <Link to={'/'}>
                    <img className={s.exit} src={exit} />
                </Link>
            </div>
            <div className={s.recipeContainer}>

            </div>
        </div>



    )
}