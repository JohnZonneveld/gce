import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import MemberPage from './pages/MemberPage'
import MemberList from './pages/MemberList'
import EventList from './pages/EventList'
import Header from './containers/Header'
import NavBar from './components/NavBar';
import Footer from './containers/Footer'

import { connect } from 'react-redux'
import { fetchMembers } from './actions/memberActions'


class App extends Component {

  render() 
  
    {
      return (
        <>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/members/:id' component={MemberPage} />
          <Route exact path='/members' component={MemberList} />

          <Route exact path='/events' component={EventList} />

        </Switch>
        {/* <Footer /> */}
        </>
      );}

    
}

const mapStateToProps = state => {

  return {
    members: state.members,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchMembers: () => dispatch(fetchMembers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
