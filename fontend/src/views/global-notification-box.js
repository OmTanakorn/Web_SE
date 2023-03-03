import React from 'react'

import { Helmet } from 'react-helmet'

import './global-notification-box.css'

const GlobalNotificationBox = (props) => {
  return (
    <div className="global-notification-box-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="global-notification-box-global-notification-box">
        <img
          src="/playground_assets/box9143-jx1q-400h.png"
          alt="Box9143"
          className="global-notification-box-box"
        />
        <div className="global-notification-box-group55">
          <div className="global-notification-box-group54">
            <div className="global-notification-box-group56">
              <div className="global-notification-box-group541"></div>
            </div>
          </div>
        </div>
        <img
          src="/playground_assets/rectangle181198-v33z-200h.png"
          alt="Rectangle181198"
          className="global-notification-box-rectangle18"
        />
        <span className="global-notification-box-text">
          <span>Main Notification</span>
        </span>
        <span className="global-notification-box-text2">
          <span>Beware! Your Mum is behind you</span>
        </span>
        <img
          src="/playground_assets/cancelbutton9146-8ip7-200h.png"
          alt="CancelButton9146"
          className="global-notification-box-cancel-button"
        />
        <img
          src="/playground_assets/okbutton9148-1nc-200h.png"
          alt="OKButton9148"
          className="global-notification-box-o-button"
        />
        <span className="global-notification-box-text4">
          <span>Cancel</span>
        </span>
        <span className="global-notification-box-text6">
          <span>OK</span>
        </span>
      </div>
    </div>
  )
}

export default GlobalNotificationBox
