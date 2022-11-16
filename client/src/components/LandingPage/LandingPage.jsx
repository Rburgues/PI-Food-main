import React from 'react';
import s from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/hf_logo.png'
import puerta from './img/puerta.png'
import flecha from './img/flecha.png'



export const LandingPage = () => {

  return (


    <div className={s.containers}>
      <div className={s.forms_containers}>

        <div className={s.signin_signup}> <img src={logo} /><br></br>
          <h1>Welcome to Henry Food!</h1>
          <h3>Please click the DOOR to enter</h3>
          <div className={s.btnCont}>
            <Link to={'/home'}>
              <div className={s.entrada_landing}>
             <div className={s.col1} ><img className={s.flechaLanding} src={flecha} /></div>
              <div className={s.col2} ><img className={s.puertaLanding} src={puerta} /></div>
            </div>
            </Link>
          
          </div>

        </div>
      </div>
    </div>


  )
}


export default LandingPage;