import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Listing from './Listing'
import Home from './Home'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import Registration from './Registration'
import LogIn from './LogIn'
import EnterDetails from './EnterDetails'
import { Loading } from './Loading'

const App = () => (
  <Router>
    <Route path='/' component={Loading}/>
    <Route path='/' component={NavBar}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/list' component={Listing}/>
    <Route exact path='/dashboard' component={Dashboard}/>
    <Route exact path='/register' component={Registration}/>
    <Route exact path='/signin' component={LogIn}/>
    <Route exact path='/details' component={EnterDetails} />
  </Router>
)

export default App
