import React from 'react';
import './LandingPage.css';
import  { Component } from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends Component {
  
  render() {
    return (
      
     
    <div class="containers">
      <div class="forms_containers">
        <div class="signin_signup">
          <form action="#" class="sign_in_form">
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
            <p class="social_text">or create your account</p><a href="#"> click here</a>
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
          </form>
          </div>
      </div>
      
    </div>
  

    )
}}

export default LandingPage;