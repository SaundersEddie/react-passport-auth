import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

import AUTH from "./utils/Auth";
import API from "./utils/API";

import Home from './Pages/Home';
import About from './Components/About';
import Register from './Pages/Register';
import AdminOnly from './Pages/Auth/AdminOnly';
import AuthOnly from './Pages/Auth/AuthOnly';
import Login from './Pages/Login';
import UserInfoContext from "./utils/userInfoContext";

export default function App() {
  
  const navigate = useNavigate();

  const [userProps, setUserProps] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    userEmail: '',
    isAdmin: false
  })
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginErr, setLoginErr] = useState("");

  // const history = useHistory();

  useEffect(() => {
    AUTH.getUser().then((response) => {
      if (response.data.user) {
        setLoggedIn(true);
        const { userName, firstName, lastName } = response.data.user;
        return getUserInfo(userName, firstName, lastName);
      } else {
        setLoggedIn(false);
      }

    })
    return () => {
      setLoggedIn(false);
    };
  }, []);

  const logout = (event) => {
    event.preventDefault();
    AUTH.logout().then((response) => {
      if (response.status === 200) {
        setLoggedIn(false);
        navigate.push("/");
      }
    });
  };

  
  const getUserInfo = (userName, firstName, lastName) => {
    API.getUserInfo(userName).then((res) => {
      const { userEmail, password } = res.data[0];
      setUserProps({
          ...userProps, 
          firstName, 
          lastName,
          userName, 
          password,
          userEmail
      });
      
    });
  }

  const login = (userData) => {
    AUTH.login(userData)
      .then((response) => {
        if (response.status === 200) {
          // update the state
          setLoggedIn(true);
          const { userName, firstName, lastName } = response.data.user;
          getUserInfo(userName, firstName, lastName);
          // history.push("/feed");
        }
      })
      .catch((err) => {
        //console.log("err: ", err);
        setLoginErr("Invalid username and password combination.");
      });
  };

  return (
    <UserInfoContext.Provider value={userProps}>
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
    </UserInfoContext.Provider>
  )
}
