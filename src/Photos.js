import React, { Component } from 'react'
import camera from './images/camera.jpeg'
import beach1 from './images/beach1.jpeg'
import beach2 from './images/beach2.jpeg'
import beach3 from './images/beach3.jpeg'
import beach4 from './images/beach4.jpeg'
import mountains1 from './images/mountains1.jpeg'
import mountains2 from './images/mountains2.jpeg'
import mountains3 from './images/mountains3.jpeg'
import mountains4 from './images/mountains4.jpeg'

class Photos extends Component {
  render() {
    return (
      <div>
        <canvas />
        {/* <input type="file" /><input /> */}
        <main class="photoGallery">
          <div class="profileBar">
            <img src={camera} alt="profile" />
            <h4>Michelle Yenny</h4>
            <button>Create Album</button>
          </div>
          <div class="photoGallerySection">
            <h4>Summer 2017</h4>
            <div class="photosGalleryImages">
              <img class="photoGalleryImage" src={beach1} alt="beach" />
              <img class="photoGalleryImage" src={beach2} alt="beach" />
              <img class="photoGalleryImage" src={beach3} alt="beach" />
              <img class="photoGalleryImage" src={beach4} alt="beach" />
            </div>
            <h4>Fall 2014</h4>
            <div class="photosGalleryImages">
              <img class="photoGalleryImage" src={mountains1} alt="mountain" />
              <img class="photoGalleryImage" src={mountains2} alt="mountain" />
              <img class="photoGalleryImage" src={mountains3} alt="mountain" />
              <img class="photoGalleryImage" src={mountains4} alt="mountain" />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Photos
