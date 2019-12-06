import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Listing from './Listing'
import Home from './Home'
import Nav from './Nav'
import Dashboard from './Dashboard'

const App = () => (
  <Router>
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/list' component={Listing}/>
    <Route exact path='/dashboard' component={Dashboard}/>
  </Router>
)

export default App
