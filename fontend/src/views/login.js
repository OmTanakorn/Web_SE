import React, { useState } from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './login.css'

const Login = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(username, password)

    axios.post(`http://127.0.0.1:4000/login?Username=${username}&Password=${password}`)
      .then(response => {
        // handle successful response
      })
      .catch(error => {
        // handle error
  });
  }

  //</form>onClick={() => window.location.href="/home"


  return (
    <div className="login-container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login-login">
        <img
          alt="login187"
          src="/playground_assets/login187-wmdr-1600w.png"
          className="login-login1"
        />
        <img
          alt="IMAGE15015189"
          src="/playground_assets/image15015189-biti-200h.png"
          className="login-i-m-a-g-e1501"
        />
        <img
          alt="IMAGE21input5613"
          src="/playground_assets/image21input5613-zmqn-200h.png"
          className="login-i-m-a-g-e21input"
        />
        <div className="login-i-m-a-g-e22input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="new-password"
              className="login-textinput input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="login-textinput1 input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <input
            type="checkbox"
            autoComplete="on"
            // checked
            required
            id="on"
            className="login-checkbox"
          />
        </div>
        <div className="login-group9">
          <label className="login-text">
            <label className="login-text01">Not register yet? </label>
            <label className="login-text02">
              <Link to={`/register`} >Create an Account</Link>
            </label>
          </label>
          <div className="login-container1">
            <div className="login-container2">
              <div className="login-container3">
                <div className="login-container4">
                  <div className="login-group1">
                    <label className="login-text04">
                      <label>Username</label>
                    </label>
                    <label className="login-text06">
                      <label>Password</label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="login-text08">
            <label>Remember me</label>
          </label>
          <label className="login-text10">
            <label>Forget password</label>
          </label>
          <form onSubmit={handleSubmit}>
            <button className="login-button">Login</button>
          </form>
        </div>
        <label className="login-text12">
          <label className="login-text13">
            Login
            <label
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </label>
        </label>
        <img
          alt="IMAGEPngtreehanddrawncartoonvideoconference5364467402"
          src="/playground_assets/imagepngtreehanddrawncartoonvideoconference5364467402-gwen-600h.png"
          className="login-i-m-a-g-e-pngtreehanddrawncartoonvideoconference5364467"
        />
        <label className="login-text14">
          <label>Welcome</label>
        </label>
        <label className="login-text16">
          <label>
            <label>
              to the CourseStudy
              <label
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </label>
            <br></br>
            <label>website.</label>
          </label>
        </label>
        <img
          alt="Line54573"
          src="/playground_assets/line54573-o2wg.svg"
          className="login-line5"
        />
        <img
          alt="Line75196"
          src="/playground_assets/line75196-n9ao.svg"
          className="login-line7"
        />
        <img
          alt="Line85197"
          src="/playground_assets/line85197-mhrl.svg"
          className="login-line8"
        />
        <img
          alt="Line64575"
          src="/playground_assets/line64575-8rin.svg"
          className="login-line6"
        />
        <img
          alt="Ellipse54588"
          src="/playground_assets/ellipse54588-inwp-200h.png"
          className="login-ellipse5"
        />
        <img
          alt="image65113"
          src="/playground_assets/image65113-4i68-200h.png"
          className="login-image6"
        />
      </div>
    </div>
  )
}

export default Login
