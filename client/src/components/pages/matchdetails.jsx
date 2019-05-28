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
  console.log("the state ----- ", this.state)
  if(this.state.data.matchevents) {
    return this.state.data.matchevents.map(eachMatch =>{
      console.log("the maps ---------------------- ", eachMatch)
      return <li>  {eachMatch.dbid} </li> 
    })
  }
}

render() {
  
    return (
        <div className="Home">
            {this.state.loading ? "Loading..." : ""}               

            {/* {this.state.data.matchevents} */}
            {this.showMatches()}
            
        </div>
    );
}
 
}