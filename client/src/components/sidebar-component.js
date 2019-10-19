import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';





function Sidebar() {
    return(
      <div>
        <div id="header">
          
          <div className="top">
            
            <div id="logo">
              {/* <span className=""><img src={profilePhoto} alt="" /></span> */}
              <h1 id="title">Todd Howard</h1>
              <p>Game Director</p>
            </div>
  
            <nav id="nav">
              <ul>
                <li><a href="/dashboard"><span>Personal Stats</span></a></li>
                <li><a href="/groups"><span>Friends and Groups</span></a></li>
                <li><a href="/howto"><span>How to Reduce your Carbon Footprint</span></a></li>
              </ul>
            </nav>

          </div>
  

        </div>
      </div>
    );
  }

export default Sidebar;