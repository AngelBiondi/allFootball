import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/matches';
import search from './pages/search';
import Login from './pages/Login';
import Signup from './pages/Signup';
import teamdetails from './pages/teamdetails';
import matchdetails from './pages/matchdetails';
import api from '../api';
import favteamm from './pages/favteamm'
import axios from 'axios'
import matches from './pages/matches';
import sportLogo from '../images/sport.svg';
import star from '../images/star.png';
import searchLogo from '../images/search.png'
import realLogo from '../images/reallogo.png'
import arrow from '../images/arrow.png';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  componentDidMount() {



  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="hlogo" src={realLogo} alt="test" />
          <h1 className="App-title">All Soccer Live</h1>
          <div className="Sign">
            {!api.isLoggedIn() && <NavLink to="/signup">Sign up</NavLink>}
            {!api.isLoggedIn() && <NavLink to="/login">Log in</NavLink>}
            {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          </div>

        </header>
        <div className="App">

          <Switch>
            <Route path="/" exact component={matches} />
            <Route path="/search" component={search} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/matchdetails/:id" component={matchdetails} />
            <Route path="/teamdetails/:id" component={teamdetails} />
            <Route path="/favteamm" component={favteamm} />

          </Switch>
          <footer className="bottom-bar App-header">
            <NavLink to="/" exact><img className="logo" src={sportLogo} alt="test" /></NavLink>
            <NavLink to="/search"><img className="logo" src={searchLogo} alt="test" /></NavLink>
            <NavLink to="/favteamm"><img className="logo" src={star} alt="test" /></NavLink>
          </footer>


        </div>
      </div>
    );
  }
}