import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import MemberPage from './pages/MemberPage'
import MemberList from './pages/MemberList'
import EventList from './pages/EventList'
import Header from './containers/Header'
import NavBar from './components/NavBar';
import Footer from './containers/Footer'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class App extends Component {
  render() 
    {
      return (
        <>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} className="content"/>
          <Route exact path='/about' component={About} className="content"/>
          <Route exact path='/members/:id' component={MemberPage} />
          <Route exact path='/members' component={MemberList} />
          <Route exact path='/events' component={EventList} />

        </Switch>
        <Footer />
        {/* <div className="App">
          <header className="sticky" />
        </div> */}
        </>
      );}

    
}

export default App;
