import React, { Component } from 'react';
import api from '../../api';
import search from './search.jsx';

import {Switch, Route, Redirect, Link} from 'react-router-dom';
export default class teamdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getTeamDetails()
    }
    getTeamDetails = () => {
      let Datateam;
        api.getTeamDetailss(382).then(dataFromAPI => {
            console.log("-------------------------------------", dataFromAPI.data)
            Datateam = dataFromAPI.data;
            this.state.data = Datateam;
            console.log(Datateam);
          })
          
        console.log("itworks?", ...this.state.data)
        }
        
        showData = () => {
          return this.state.data.map(eachData => {
            return (
              
              <div>
                   <h2>{eachData.name}</h2>
                   <h2>{eachData.shirtUrl}</h2>
                   <h2>{eachData.shortCode}</h2>
                   <h2>{eachData.shortName}</h2>
                   <h2>{eachData.showCardStats}</h2>
                </div>
            )
        })
    }
    render() {
      
        return (
            <div className="Home">
                {this.state.loading ? "Loading..." : ""}


               
                {this.showData()}

            </div>
        );
    }
}