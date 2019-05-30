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

        <div className="matches" > <Link to = {`/matchdetails/${eachData.dbid}`} className="linksd"> 
     <ul>
         <li>  <h3 className="maatches">{eachData.homeTeam.shortName}</h3> </li>
        <li className = "score-box">  <h3>{eachData.homeGoals} - {eachData.awayGoals}</h3></li>
        {/* <li> <h3></h3></li> */}
        <li>  <h3 className="maatches">{eachData.awayTeam.shortName}</h3></li>
       </ul>
           </Link>
           <hr className="hrsty"/> 
      </div>
          )
        })
      }
  render() {                
    return (
      <div className="Home">
            <h2>Matches</h2>
            <div className = "all-matches">
            {this.state.loading? "Loading..." : ""}
            

         
            {this.showData()}
</div>
          </div>
          );
        }
      }
