import React, { Component } from 'react'
import './App.css'
import Map from './Map'
import Photos from './Photos'
import Login from './Login'
import Pinpopup from './Pinpopup'
import Signup from './Signup'
import Introduction from './Introduction'
import Pinnedmap from './Pinnedmap'

class App extends Component {
  render() {
    return (
      <div>
        <Pinnedmap />
      </div>
    )
  }
}

export default App
