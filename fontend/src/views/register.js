import React, { useState } from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './register.css'

const Register = (props) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conPassword, setConPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, email, password, conPassword)
  }

  return (
    <div className="register-container">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="register-register">
        <div className="register-container1">
          <img
            alt="login15713"
            src="/playground_assets/login15713-fgqw-1600w.png"
            className="register-login1"
          />
          <img
            alt="IMAGE215713"
            src="/playground_assets/image215713-fn6h-200h.png"
            className="register-i-m-a-g-e21"
          />
          <img
            alt="IMAGE245716"
            src="/playground_assets/image245716-9uj4-200h.png"
            className="register-i-m-a-g-e24"
          />
          <img
            alt="IMAGE225713"
            src="/playground_assets/image225713-ec0u-200h.png"
            className="register-i-m-a-g-e22"
          />
          <img
            alt="IMAGE235716"
            src="/playground_assets/image235716-ybi9-200h.png"
            className="register-i-m-a-g-e23"
          />
          <div className="register-group9">
            <label className="register-text">
              <label>Username</label>
            </label>
            <label className="register-text02">
              <label>Email</label>
            </label>
            <label className="register-text04">
              <label>Confirm password</label>
            </label>
            <label className="register-text06">
              <label>Password</label>
            </label>
            <form onSubmit={handleSubmit}>
              {/* register-btn */}
              <button className="register-button button" onClick={() => window.location.href="/"}>Register</button>
              {/* cancel-btn */}
              <label className="register-text08">
                <Link to={`/`}>Cancel</Link>
              </label>
            </form>
          </div>
          {/* Username */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="register-textinput input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Email */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="register-textinput1 input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="register-textinput2 input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* ConPassword */}
            <input
              type="password"
              name="conPassword"
              placeholder="Confirm Password"
              className="register-textinput3 input"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
            />
          </form>
        </div>
        {/* logo */}
        <img
          alt="IMAGE15015713"
          src="/playground_assets/image15015713-2m3i-200h.png"
          className="register-i-m-a-g-e1501"
        />
        {/* REGISTER */}
        <label className="register-text10">
          <label className="register-text11">
            Register
          </label>
        </label>
        <label className="register-text12">
          <label>Hello!</label>
        </label>
        <label className="register-text14">
          <label>
            <label>Hello new members.</label>
            <br></br>
            <label>Have fun learning.</label>
          </label>
        </label>
        <img
          alt="Line55715"
          src="/playground_assets/line55715-odya.svg"
          className="register-line5"
        />
        <img
          alt="Line95716"
          src="/playground_assets/line95716-tuzv.svg"
          className="register-line9"
        />
        <img
          alt="Line75715"
          src="/playground_assets/line75715-qj4h.svg"
          className="register-line7"
        />
        <img
          alt="Line85715"
          src="/playground_assets/line85715-ypdb.svg"
          className="register-line8"
        />
        <img
          alt="IMAGEPngtreehanddrawncartooncomputerconference5364446"
          src="/playground_assets/imagepngtreehanddrawncartooncomputerconference5364446-qlu8-600w.png"
          className="register-i-m-a-g-e-pngtreehanddrawncartooncomputerconference5364"
        />
      </div>
    </div>
  )
}

export default Register
