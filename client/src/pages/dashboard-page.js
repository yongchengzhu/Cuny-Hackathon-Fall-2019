import React, { Component } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';
import SideBar from '../components/sidebar-component';











export default class AboutUs extends Component {
    constructor(props) {
      super(props);
  
    }

    render() {
        return (
            <div>
                <SideBar/>


            </div>
        );
    }
}

