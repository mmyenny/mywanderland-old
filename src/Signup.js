import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (
      <div>
        <canvas />
        <main class="loginPage">
          <h1>MyWanderland</h1>
          <div class="login">
            <img src="./images/camera.jpeg" alt="profile picture" />
            <input placeholder="Full name" /> <input placeholder="Email" />
            <input placeholder="Username" /> <input placeholder="Password" />
            <button>Sign up</button>
          </div>
          <div class="loginOr">
            <div class="loginOrLine" />
            <h4>OR</h4>
            <div class="loginOrLine" />
          </div>
          <button class="googleLogIn">Log in with Google</button>
          <button class="facebookLogIn">Log in with Facebook</button>
        </main>
      </div>
    )
  }
}

export default Signup
