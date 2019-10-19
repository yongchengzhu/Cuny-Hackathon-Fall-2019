import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';

import profilePhoto from '../img/avatar.png';

function Sidebar() {
    return(
      <div>
        <div id="header">
          
          <div className="top">
            
            <div id="logo">
              <span className=""><img src={profilePhoto} alt="" /></span>
              <h1 id="title">Jane Doe</h1>
              <p>Hyperspace Engineer</p>
            </div>
  
            <nav id="nav">
              <ul>
                <li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
                <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>
                <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>
                <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>
              </ul>
            </nav>

          </div>
  
          <div class="bottom">
            <ul class="icons">
              <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
              <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
              <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
            </ul>
          </div>

        </div>
      </div>
    );
  }

export default Sidebar;