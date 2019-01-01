import React, { Component } from 'react'
import photo_album from './images/photo-album1.png'

class Pinpopup extends Component {
  render() {
    return (
      <div>
        <div class="pinPopUp">
          <p>Tampa, FL</p>
          <p>United States</p>
          <img class="photoAlbumPreview" src={photo_album} alt="Album" />
          <p>Create Album</p>
          <button>Upload Images</button>
        </div>
      </div>
    )
  }
}

export default Pinpopup
