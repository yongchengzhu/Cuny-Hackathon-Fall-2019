import React, { Component } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';
import SideBar from '../components/sidebar-component';
import Piechart from '../components/piechart';

export default class Groups extends Component {
  constructor(props) {
    super(props);
  }







  render() {
    return (
      <div className="pie_Chart">
        <SideBar/>
        <div>
        <Piechart
        data={[{index: 0, value: 40},
               {index: 1, value: 80},
               {index:2 , value: 20}
              ]}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
      />
      </div>

      <button type="submit" className="dashboard_Button">Add Member</button>


      </div>
    );
  }
}
