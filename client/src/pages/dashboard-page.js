import React, { Component } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';
import SideBar from '../components/sidebar-component';
import Bargraph from '../components/bargraph';















export default class Groups extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SideBar/>

        <label className="label_Y">Carbon Emitted</label><br></br>
        <Bargraph
          data={[{index: 0, date: 1, value: 15},
                {index: 1, date: 2, value: 45}, 
                {index: 3, date: 3, value: 25}]}
          width={200}
          height={300}
          top={20}
          bottom={30}
          left={30}
          right={0}
        />

        <label className="label_X">Week</label><br></br>

        <label className="label_Info">Number of Miles driven:</label>
        
        <input type="text" /><br></br>
        
        <label className="label_Info">Gallons of gas used: </label>
        
        <input type="text" className="ml-5" /><br></br>

        <label className="label_Info">Total emitted Carbon-Dioxide: </label>
        
        <input type="text" className="ml-5"/><br></br>

        <button type="submit" className="dashboard_Button">Add More Data</button>

      </div>
      );
  }
}

