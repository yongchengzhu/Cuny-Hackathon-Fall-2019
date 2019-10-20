import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';

import server from '../apis/server';

function Sidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => { fetchUser() }, [])

  const fetchUser = async () => {
    const res = await server.get('/users/');

    setUser(res.data);
  }
    return(
      <div>
        <div id="header">
          
          <div className="top">
            
            <div id="logo">
              { !user? null : <h1>{user.fullname}</h1> }
              {/* <span className=""><img src={profilePhoto} alt="" /></span> */}
              <p>Member</p>
            </div>
  
            <nav id="nav">
              <ul>
                <li><a href="/dashboard"><span>Personal Stats</span></a></li>
                <li><a href="/groups"><span>Friends and Groups</span></a></li>
                <li><a href="/howto"><span>How to Reduce your Carbon Footprint</span></a></li>
              </ul>
            </nav>

            <footer id="footer">
              <ul>
                <a href="/login"><span>Log out</span></a>
              </ul>
            </footer>

          </div>
  

        </div>
      </div>
    );
  }

export default Sidebar;