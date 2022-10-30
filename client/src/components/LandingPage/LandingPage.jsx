import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import logo from '../../images/hf_logo.png'

import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'


export const LandingPage = () => {

  const clientID = '432612081174-e6mbr9l1bml96vb9buafc5cmusql1255.apps.googleusercontent.com'

  const onSuccess = (response) => {
    if (response) {
      localStorage.setItem('response', JSON.stringify(response));
      window.location = '/home';
    }

  }


  const onFailure = () => {
    console.log('Something went wrong')
  }


  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        client_id: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])



  return (


    <div class="containers">
      <div class="forms_containers">

        <div class="signin_signup"> <img src={logo} /><br></br>
          <h1>Welcome to Henry Food!</h1>
          <h3>Please sign in with your Google account</h3>
          <div className='btnGoogle'>
            <GoogleLogin
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_policy'}
            />
          </div>
          {/* <form action="#" class="sign_in_form">
            <h2 class="title">Sign in</h2>
            <div class="input_field">
              <i class="fas fa_user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input_field">
              <i class="fas fa_lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Link  to="/home">
            <input type="submit" value="Login" class="btn solid" />
            </Link>
            <p class="social_text">or create your account</p><a href="#"> click here</a> */}
          {/* <div class="social_media">
              <a href="#" class="social_icon">
                <i class="fab fa_facebook_f"></i>
              </a>
              <a href="#" class="social_icon">
                <i class="fab fa_twitter"></i>
              </a>
              <a href="#" class="social_icon">
                <i class="fab fa_google"></i>
              </a>
              <a href="#" class="social_icon">
                <i class="fab fa_linkedin_in"></i>
              </a>
            </div> */}
          {/* </form> */}
        </div>
      </div>
    </div>


  )
}


export default LandingPage;