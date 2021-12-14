import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';

import './App.css';

// import AUTH from "./utils/Auth";
// import API from "./utils/API";

import Home from './Pages/Home';
import About from './Components/About';
import Register from './Pages/Register';
import AdminOnly from './Pages/Auth/AdminOnly';
import AuthOnly from './Pages/Auth/AuthOnly';
import Login from './Pages/Login';
// import UserInfoContext from "./utils/userInfoContext";

// App needs to verify logged in status, if not logged in then we only display a login page
// We're ging to turn app.js into a component to do this.

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      loggedIn: "Not Logged In",
      user: {}
    }

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
    // this.checkLoginStatus();
    localStorage.setItem('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI2NGU3NzNjZmJiZjdhYzdkNDc0YmIiLCJpYXQiOjE2Mzk0ODA3MjN9.a8z5RrnAh-WtZnC9qRaAG_JUq1pZgdb6ZXi18KzmZ2o')
    const userToken = localStorage.getItem('auth-token');
    // console.log (userToken);

    axios
        .post ('/api/user/test', {
          headers: {
            'auth-token': userToken
          }
        })
        .then ( res => {
          console.log (res);
      })
    }

  // handleLogout() {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user: {}
  //   });
  // }

  // handleLogin(data) {
  //   this.setState({
  //     loggedInStatus: "LOGGED_IN",
  //     user: data.user
  //   });
  // }

// export default function App() {
  render() {
    return (
        <div>
          <Router>
            <Container className="p-1" fluid>
              <Navbar className="border-bottom" bg="transparent" expand="lg" sticky="top">
                <Navbar.Brand>Authentication and authourization Test</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                  <Nav>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/login'>Login</Link>
                    <Link className='nav-link' to='/admin'>Admin Only</Link>
                    <Link className='nav-link' to='/auth'>Auth Only</Link>
                    <Link className='nav-link' to='/register'>Register</Link>
                  </Nav>
                  <About />
                </Navbar.Collapse>
              </Navbar>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/auth" element={<AuthOnly />} />
                <Route path="/admin" element={<AdminOnly />} />
              </Routes>
            </Container>
          </Router>
        </div>
    )
  }
}