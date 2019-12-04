import React from 'react'
import { Route } from 'react-router-dom'
import Listing from './Listing'
import Home from './Home'
import Nav from './Nav'

const App = () => (
  <div>
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/list' component={Listing}/>
  </div>
)

export default App
