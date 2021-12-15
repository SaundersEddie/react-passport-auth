import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Login from './Pages/Login';
import Home from './Pages/Home';


// App needs to verify logged in status, if not logged in then we only display a login page
// We're ging to turn app.js into a component to do this.

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      loggedIn: false,
      user: {}
    }
    // Temporary Data    
    // localStorage.setItem('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI2NGU3NzNjZmJiZjdhYzdkNDc0YmIiLCJpYXQiOjE2Mzk0ODA3MjN9.a8z5RrnAh-WtZnC9qRaAG_JUq1pZgdb6ZXi18KzmZ2o')
  }


  // checkLoginStatus() {
  //   axios
  //     .get("http://localhost:3001/logged_in", { withCredentials: true })
  //     .then(response => {
  //       if (
  //         response.data.logged_in &&
  //         this.state.loggedInStatus === "NOT_LOGGED_IN"
  //       ) {
  //         this.setState({
  //           loggedInStatus: "LOGGED_IN",
  //           user: response.data.user
  //         });
  //       } else if (
  //         !response.data.logged_in &
  //         (this.state.loggedInStatus === "LOGGED_IN")
  //       ) {
  //         this.setState({
  //           loggedInStatus: "NOT_LOGGED_IN",
  //           user: {}
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.log("check login error", error);
  //     });
  // }

  componentDidMount() {
      this.validateStatus()
    // axios
        // .post ('/api/user/test', {
          // headers: {
            // 'auth-token': localStorage.getItem('auth-token')
          // }
        // })
        // .then ( res => {
          // console.log (res);
      // })
    }

    validateStatus() {
        if (localStorage.getItem('auth-token')) {
            this.setState ({
                loggedIn: true
            })
        }
    console.log ('Validate Logged In Status: ', this.state.loggedIn);
    return this.state.loggedIn;
  }

// export default function App() {
  render() {
    
    return (
      <div>
          {this.state.loggedIn ? <Home /> : <Login />}


      </div>
    )
  }

}