import React, { Component } from 'react';
import api from '../../api';

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
      return <li>{eachData.name}</li>
    })
  }
  render() {

    return (
      <div className="Home">
        <h2>Teams</h2>
        {this.state.loading? "Loading..." : 
      
      <input type="text" label="search for a team" onChange={this.filterTeams} />
       }
        <p>Search for your favorite Team</p>
        {this.showData()}

      </div>
    );


  }
}

