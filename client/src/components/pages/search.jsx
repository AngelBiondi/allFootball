import React, { Component } from 'react';
import api from '../../api';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
// import teamdetails from './teamdetails';


export default class search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      teams: [],
      loading: true

    }
  }
componentDidMount() {
  this.getTeams()
} 
  getTeams = () => {
    
    api.getTeamName().then(dataFromAPI => {
      console.log(dataFromAPI.data)
      this.setState({
        data: dataFromAPI.data,
        loading: false 
      })
    })
  }
  filterTeams = (e) => {
    console.log(e.target.value)
    let teams = [...this.state.data]
    let fTeams = teams.filter(eachTeam => {
      return eachTeam.name.includes(e.target.value)
    })
    this.setState ({
      teams: fTeams
    })
  }
  showData = () => {
    return this.state.teams.map(eachData => {
      return <li className="read"  data-id={ `${eachData.dbid}` } > <Link to = {`/teamdetails/${eachData.dbid}`}> {eachData.name} </Link> </li>
    })
  }
  render() {

    return (
      <div className="Home">
        <h2>Teams ....</h2>
       {this.state.loading? <marquee scrollamount="15" direction="right"><p>Search for your favorite Team</p></marquee>: 
      
        <input type="text" placeholder="Search teams" label="search for a team" onChange={this.filterTeams} />
       }
        
      {this.showData()}

      </div>
    );


  }
}

