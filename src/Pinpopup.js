import React, { Component } from 'react'

class Pinpopup extends Component {
  render() {
    return (
      <div>
        <div class="pinPopUp">
          <p>Tampa, FL</p>
          <p>United States</p>
          <img
            class="photoAlbumPreview"
            src="./images/photo-album1.png"
            alt="Photo Album"
          />
          <p>Create Album</p>
          <button>Upload Images</button>
        </div>
      </div>
    )
  }
}

export default Pinpopup
