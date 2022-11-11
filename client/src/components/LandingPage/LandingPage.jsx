import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import logo from '../../images/hf_logo.png'
import puerta from './img/puerta.png'
import flecha from './img/flecha.png'



export const LandingPage = () => {

  return (


    <div className="containers">
      <div className="forms_containers">

        <div className="signin_signup"> <img src={logo} /><br></br>
          <h1>Welcome to Henry Food!</h1>
          <h3>Please click the DOOR to enter</h3>
          <div className='btnCont'>
            <Link to={'/home'}>
              <div className='entrada_landing'>
             <div className='col1' ><img className='flecha_landing'src={flecha} /></div>
              <div className='col2' ><img className='puerta_landing'src={puerta} /></div>
            </div>
            </Link>
          
          </div>

        </div>
      </div>
    </div>


  )
}


export default LandingPage;