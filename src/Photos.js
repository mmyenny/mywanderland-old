import React, { Component } from 'react'

class Photos extends Component {
  render() {
    return (
      <div>
        <canvas />
        {/* <input type="file" /><input /> */}
        <main class="photoGallery">
          <div class="profileBar">
            <img src="./images/camera.jpeg" alt="profile picture" />
            <h4>Michelle Yenny</h4>
            <button>Create Album</button>
          </div>
          <div class="photoGallerySection">
            <h4>Summer 2017</h4>
            <div class="photosGalleryImages">
              <img
                class="photoGalleryImage"
                src="./images/beach1.jpeg"
                alt="beach"
              />
              <img
                class="photoGalleryImage"
                src="./images/beach2.jpeg"
                alt="beach"
              />
              <img
                class="photoGalleryImage"
                src="./images/beach3.jpeg"
                alt="beach"
              />
              <img
                class="photoGalleryImage"
                src="./images/beach4.jpeg"
                alt="beach"
              />
            </div>
            <h4>Fall 2014</h4>
            <div class="photosGalleryImages">
              <img
                class="photoGalleryImage"
                src="./images/mountains1.jpeg"
                alt="mountain"
              />
              <img
                class="photoGalleryImage"
                src="./images/mountains2.jpeg"
                alt="mountain"
              />
              <img
                class="photoGalleryImage"
                src="./images/mountains3.jpeg"
                alt="mountain"
              />
              <img
                class="photoGalleryImage"
                src="./images/mountains4.jpeg"
                alt="mountain"
              />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Photos
