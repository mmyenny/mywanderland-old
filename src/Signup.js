import React, { Component } from 'react'
import camera from './images/camera.jpeg'

class Signup extends Component {
  render() {
    return (
      <div>
        <canvas />
        <main className="signUpPage">
          <h1>MyWanderland</h1>
          <div className="signUp">
            <img src={camera} alt="profile" />
            <input placeholder="Full name" /> <input placeholder="Email" />
            <input placeholder="Username" /> <input placeholder="Password" />
            <button>Sign up</button>
          </div>
          <div className="logInOr">
            <div className="logInOrLine" />
            <h4>OR</h4>
            <div className="logInOrLine" />
          </div>
          <button className="googleLogIn">Log in with Google</button>
          <button className="facebookLogIn">Log in with Facebook</button>
        </main>
      </div>
    )
  }
}

export default Signup
