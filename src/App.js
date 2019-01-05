import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Map from './Map'
import Photos from './Photos'
import Login from './Login'
import Pinpopup from './Pinpopup'
import Signup from './Signup'
import Introduction from './Introduction'
import Pinnedmap from './Pinnedmap'
import Photo from './Photo'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/Login/" component={Login} />
        </div>
      </Router>
    )
  }
}

export default App
