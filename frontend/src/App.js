import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';

import Home from './Pages/Home';
import About from './Components/About';
import Register from './Pages/Register';
import AdminOnly from './Pages/Auth/AdminOnly';
import AuthOnly from './Pages/Auth/AuthOnly';
import Login from './Pages/Login';

import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Container className="p-1" fluid={false}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" sticky="top">
            <Navbar.Brand>Auth Test</Navbar.Brand>
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
            {/* <Route path="/" exact render={() => <Home />} /> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth" element={<AuthOnly />} />
            <Route path="/admin" element={<AdminOnly />} />

          </Routes>
        </Container>
      </Router>
    </div>
  );
}




//  {/* <Link className='nav-link' to='/Login'>Metro</Link> */}
//  {/* <Link className='nav-link' to='/Admin'>Metro</Link> */}

// {/* <About /> */}
// {/* <Navbar.Text> */}
// {/* <TimeandWeather /> */}
// {/* </Navbar.Text> */}

//  {/* <Route path="/hotels" render={() => <Hotels/>} /> */}
//     {/* <Route path="/metro" render={() => <Metro/>} /> */}
//     {/* <Route path="/events" render={() => <Events/>} /> */}
//     {/* <Route path="/tours" render={() => <Tours/>} /> */}
//     {/* <Route path="/attractions" render={() => <Attractions/>} /> */}
