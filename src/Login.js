import React, { Component } from 'react'
import camera from './images/camera.jpeg'

class Login extends Component {
  render() {
    return (
      <div>
        <canvas />
        <main class="loginPage">
          <h1>MyWanderland</h1>
          <div class="login">
            <img src={camera} alt="profile" />
            <input placeholder="Username" /> <input placeholder="Password" />
            <button>Log in</button>
            <div class="logInOptions">
              <label for="Remember me" class="logInOptions">
                <input id="Remember me" type="checkbox" /> Remember me
              </label>
              <a href="#">Sign up here</a>
            </div>
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

export default Login
