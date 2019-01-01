import React, { Component } from 'react'
import US_Map3 from './images/US-map3.png'
import beach from './images/beach1.jpeg'

class Map extends Component {
  render() {
    return (
      <div>
        <canvas />
        <main class="mainPage">
          <h1>MyWanderland</h1>
          <div class="inputBox">
            <input placeholder="Enter City, State" />
            <button>
              <i class="fas fa-map-pin" />
            </button>
          </div>
          <img class="map" src={US_Map3} alt="US map" />
        </main>
      </div>
    )
  }
}

export default Map
