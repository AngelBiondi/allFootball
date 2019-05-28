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
        return <li>{eachPlayer.name} | {eachPlayer.number}</li>
      })
    }
  
    render() {
      
        return (
            <div className="Home">
                {this.state.loading ? "Loading..." : ""}               
  
                {this.state.data.name}
                <img src={this.state.data.shirtUrl} />
                {this.showPlayers()}
                
            </div>
        );
    }
}