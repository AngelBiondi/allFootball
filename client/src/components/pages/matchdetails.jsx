import React, { Component } from 'react';
import api from '../../api';
import {Switch, Route, Redirect, Link} from 'react-router-dom';



function sortByKey(array, key) {
  if(!array){return}
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
  });
}


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
    
    api.getDetailsMatches(this.props.match.params.id).then(dataFromAPI => {
      console.log ( dataFromAPI.data );
      let sortedMatches = sortByKey(dataFromAPI.data.matchevents, 'happenedAt')
      console.log(sortedMatches, 888)
       this.setState({data:dataFromAPI.data})
     } );
}

showMatches = ( ) => {
  console.log("the state ----- ", this.state.data)
  



  

  if(this.state.data.matchevents) {


   console.log(this.state.data.matchevents)


  //  console.log(type)
    // console.log(this.state.data.matchevents[this.state.data.matchevents.length - 1])

    return this.state.data.matchevents.map(eachMatch =>{

     // console.log("the maps ---------------------- ", eachMatch)



      return(



        <div className="tdetails">
 <div className = "scores">
          <li>  <img className="shirt" src={eachMatch.homeTeam.shirtUrl}/> </li>

        
         <li className = "spread">  {eachMatch.homeGoals} - {eachMatch.awayGoals} </li>
         

         <li>  <img className="shirt" src={eachMatch.awayTeam.shirtUrl}/> </li>
</div>
     
         <li>{eachMatch.scoringSide}</li>
         

         {eachMatch.type === "substitution" ? 
          <li>{eachMatch.playerOn.name} 🔄 {eachMatch.playerOff.name}</li>
         :''
         }
 
 {eachMatch.type === "card" ? 
          <li>{eachMatch.player.name} <a href="http://www.sherv.net/"><img alt="Yellow Card" width="43px" height="41px" src="http://www.sherv.net/cm/emoticons/football/yellow-card-smiley-emoticon.gif"/></a></li>
         :''
         }
 
 {eachMatch.type === "goal" ? 
          <li> ⚽ {eachMatch.scoringPlayer.name}</li>
         :''
         }
 
        
          <li> Gametime: {eachMatch.matchTime.minutes} mins.</li>
        </div>
        ) 
    })
  }
}

render() {

    return (
        <div className="Home Homee">
         
          
            {this.state.loading ? "Loading..." : ""}               
             
            <ul className="player-list">
            {this.showMatches()}
             </ul>
        </div>
    );
}
 
}