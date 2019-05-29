import React, { Component } from 'react';
import api from '../../api';
import {Switch, Route, Redirect, Link} from 'react-router-dom';


export default class matchdetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: {
          matches:[]
        }
    }
}
componentDidMount() {
    //this.getTeamDetails()
    api.getDetailsMatches(this.props.match.params.id).then(dataFromAPI => {
      console.log ( dataFromAPI.data );
       this.setState({data:dataFromAPI.data})
     } );
}

showMatches = ( ) => {
  console.log("the state ----- ", this.state.data.round)
  

  {/* <li>{eachMatch.round.name}</li> */}

  

  if(this.state.data.matchevents) {
    console.log(this.state.data.matchevents)
    // <li>{state.data.matchevents[0].round.name}</li>

    return this.state.data.matchevents.map(eachMatch =>{
      console.log("the maps ---------------------- ", eachMatch)

      return(
        <div className="tdetails">
 <div className = "scores">
          <li> <img className="shirt" src={eachMatch.homeTeam.shirtUrl}/> </li>
         <li>  {eachMatch.homeGoals} </li>
         <li> - </li>
         <li>  {eachMatch.awayGoals} </li>
         <li> <img className="shirt" src={eachMatch.awayTeam.shirtUrl}/> </li>
</div>
         {/* <li>{eachMatch.round.name}</li> */}
         <li>{eachMatch.scoringSide}</li>
      
          <li> Gametime: {eachMatch.matchTime.minutes} mins.</li>
        </div>
        ) 
    })
  }
}

render() {
  // console.log(this.state.data.round)
    return (
        <div className="Home">
          
            {this.state.loading ? "Loading..." : ""}               
             
            {/* {this.state.data.matchevents} */}
            {this.showMatches()}
            
        </div>
    );
}
 
}