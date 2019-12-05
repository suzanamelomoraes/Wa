import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Listing from './Listing'
import Home from './Home'
import Nav from './Nav'
import AcceptMahi from './AcceptMahi'

const App = () => (
  <Router>
    <Route exact path="/2" component={AcceptMahi}/>
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/list' component={Listing}/>
  </Router>
)

export default App
