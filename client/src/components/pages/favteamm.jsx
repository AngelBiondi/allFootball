import React, { Component } from 'react';
import api from '../../api';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import arrow from '../../images/arrow.png';

export default class favteamm extends Component {
  state = {  myTeam : '' }


  componentDidMount(){
    this.getTeams()
    }


    getTeams=()=>{
      api.fetchTeam()
      .then(team=>{
        // console.log(team.team.shortName)
        this.setState({
          myTeam: team.team.shortName
        })
      })}

  render () {
    console.log(this.state.myTeam)
    return (
      <div>
        <p>Your favorite team is  </p>
        <br/>
        <img className="logo" src={arrow} alt="test" /> 
        <br/>
        {this.state.myTeam}
      </div>
    )
     
   
  }
}