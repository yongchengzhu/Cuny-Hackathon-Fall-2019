import React, { Component } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';
import SideBar from '../components/sidebar-component';





export default class Howto extends Component {
    constructor(props) {
      super(props);
  
    }

    render() {
        return (
            <div>
                <SideBar/>
    
                <ul className="group_Items">
                    <li>Stop Eating (or Eat Less) Meat </li>
                    <li>Unplug Your Devices after charging</li>
                    <li>Drive Less</li>
                    <li>Stop buying into Fad Fashion</li>
                    <li>Eat Local Organic Produce</li>
                    <li>Plant a Garden</li>
                    <li>Line-Dry Your Clothes</li>
                </ul>

            </div>
        );
    }
}

