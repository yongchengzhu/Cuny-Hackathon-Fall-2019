import React, { Component } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';
import SideBar from '../components/sidebar-component';
import Bargraph from '../components/bargraph';
import distance from "../service/distance"














export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {from: "", to: "", footprint: 0, milesDriven: 0, gallonsUsed: 0}
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  calculteCarboData = async (e) => {
    e.preventDefault();
    const milesPerGallons = 20;
    const dist = parseFloat(await distance(this.state.from, this.state.to));
    console.log(typeof dist);
    const newFoot = dist / milesPerGallons * 8.887;
    const newGallonsUsed = dist*milesPerGallons;
    this.setState({
      milesDriven: dist, footprint: newFoot, gallonsUsed: newGallonsUsed
    })
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

        <label className="label_Info">From: </label>
        <input type="text" name = "from" onChange={this.handleChange}/><br></br>
        <label className="label_Info">To: </label>
        <input type="text" name = "to" onChange={this.handleChange}/><br></br>
        <button type="submit" className="dashboard_Button" onClick = {this.calculteCarboData}>Calculate data</button>

        <br></br>
        <label className="label_Info">Number of Miles driven:</label>
        <input type="number" value={this.state.milesDriven.toString()} readOnly /><br></br>
        

        <label className="label_Info">Gallons of gas used: </label>
        <input type="number" value={this.state.gallonsUsed.toString()} readOnly /><br></br>
        

        <label className="label_Info">Total emitted Carbon-Dioxide: </label>
        <input type="number" value={this.state.footprint.toString()} readOnly /><br></br>
        
        <button type="submit" className="dashboard_Button" onClick = {this.handleSubmit}>Add More Data</button>

      </div>
      );
  }
}

