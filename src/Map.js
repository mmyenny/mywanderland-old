import React, { Component } from 'react'
import US-Map3 from './Images/US'

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
          <img class="map" src="" alt="US map" />
        </main>
      </div>
    )
  }
}

export default Map
