import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import logo from '../../images/hf_logo.png'


export const LandingPage = () => {

  return (


    <div class="containers">
      <div class="forms_containers">

        <div class="signin_signup"> <img src={logo} /><br></br>
          <h1>Welcome to Henry Food!</h1>
          <h3>Please click the button to enter</h3>
          <div className='btnCont'>
            <Link to={'/home'}>
              <button className='btnIngreso'>
                INGRESAR
              </button>
            </Link>
          
          </div>

        </div>
      </div>
    </div>


  )
}


export default LandingPage;