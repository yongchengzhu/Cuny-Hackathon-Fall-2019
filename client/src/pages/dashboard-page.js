import React, { Component } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';
import SideBar from '../components/sidebar-component';
import Bargraph from '../components/bargraph';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SideBar/>
        <Bargraph
          data={[{index: 0, date: 0, value: 15},
                {index: 1, date: 1, value: 45}, 
                {index: 2, date: 2, value: 25}]}
          width={300}
          height={200}
          top={20}
          bottom={30}
          left={30}
          right={0}
        />

      </div>
      );
  }
}

