import React, { Component } from 'react';
import api from '../../api';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import matchdetails from "./matchdetails";


export default class matches extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.getScoresCrowd()
  }
  getScoresCrowd = () => {
    api.getCrowdScores().then(dataFromAPI => {
      console.log("-------------------------------------", dataFromAPI.data)
      this.setState({
        data: dataFromAPI.data ,
        loading: false
      })
    })
  }

  showData = () => {
    return this.state.data.map(eachData => {
      return (
        <div>
<h1>{eachData.dbid}</h1>
          <h2><Link to = {`/matchdetails/$`}>{eachData.homeTeam.shortName} vs. {eachData.awayTeam.shortName} </Link></h2>
          <h3>{eachData.homeTeam.shortName}</h3>
          <h3>{eachData.homeGoals}</h3>
          <h3>{eachData.awayTeam.shortName}</h3>
          <h3>{eachData.awayGoals}</h3>
          <h3>{eachData.aggregateScore}</h3>
          
      </div>
          )
        })
      }
  render() {                
    return (
      <div className="Home">
            <h2>Matches</h2>
            {this.state.loading? "Loading..." : ""}
            

            <p>Live matches stats</p>
            {this.showData()}

          </div>
          );
        }
      }
