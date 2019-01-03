import React, { Component } from 'react'

import mountains3 from './images/mountains3.jpeg'

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <canvas />
        <img src={mountains3} alt="mountain" />
        <h4>Trip to the mountains!</h4>
      </div>
    )
  }
}

export default Photo
