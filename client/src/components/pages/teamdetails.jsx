import React, { Component } from 'react';
import api from '../../api';
import search from './search.jsx';

import {Switch, Route, Redirect, Link} from 'react-router-dom';
export default class teamdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
              players:[]
            }
        }
    }
    componentDidMount() {
        //this.getTeamDetails()
        api.getDetailsTeam(this.props.match.params.id).then(dataFromAPI => {
          console.log ( dataFromAPI.data );
           this.setState({data:dataFromAPI.data})
         } );
    }

    showPlayers = ( ) => {
      return this.state.data.players.map(eachPlayer =>{
  
        return <li>{eachPlayer.number} <img className="tshirt2" src={this.state.data.shirtUrl} /> {eachPlayer.name} <hr className="hrsty hrsty2"></hr>   </li>
   
      })
    }
  saveTeam = () => {
    api.saveTheTeam(this.state.data).then(teamSaved=>{
      console.log(this, teamSaved)
    })
  }


    render() {
      
        return (
            <div className="pdetails">
                {this.state.loading ? "Loading..." : ""}               
  
               <h1> {this.state.data.name} </h1>
                <img className="tshirt" src={this.state.data.shirtUrl} /> 
                <button className='btn draw-border' onClick={this.saveTeam}>Set as Favorite Team</button>

                <ul className = "player-list">
                {this.showPlayers()}
                </ul>
                
            </div>
        );
    }
}