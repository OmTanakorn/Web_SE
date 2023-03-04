import React,{useState} from 'react'

import { Helmet } from 'react-helmet'

import './top-up.css'

const TopUp = (props) => {

  const [value, setValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  function handleTopUp(value) {
    setValue(value);
  }

  function handleSelect(event) {
    setSelectedValue(event.target.value);
  }

  const handleTopUpSub = (e,a) => {
    e.preventDefault();
    a.preventDefault();
    console.log('Top up');
  };
  

  return (
    <div className="top-up-container">
      <Helmet>
        <title>Top up</title>
      </Helmet>
      <div className="top-up-top-up">
        <img
          src="/playground_assets/image2111191-xy5s-200h.png"
          alt="IMAGE2111191"
          className="top-up-image211"
        />
        <img
          src="/playground_assets/ellipse61197-thte-500w.png"
          alt="Ellipse61197"
          className="top-up-ellipse6"
        />
        <img
          src="/playground_assets/rectangle71198-cime-1000h.png"
          alt="Rectangle71198"
          className="top-up-rectangle7"
        />
        <img
          src="/playground_assets/rectangle581191-q2pu-900h.png"
          alt="Rectangle581191"
          className="top-up-rectangle58"
        />
        <img
          src="/playground_assets/rectangle241199-p4g-800h.png"
          alt="Rectangle241199"
          className="top-up-rectangle24"
        />
        <img
          src="/playground_assets/rectangle601191-euy-300h.png"
          alt="Rectangle601191"
          className="top-up-rectangle60"
        />
        <img
          src="/playground_assets/rectangle571191-m1vh-800h.png"
          alt="Rectangle571191"
          className="top-up-rectangle57"
        />
        <img
          src="/playground_assets/rectangle491199-7nnb-200h.png"
          alt="Rectangle491199"
          className="top-up-rectangle49"
        />
        <img
          src="/playground_assets/rectangle501191-lpmj-200h.png"
          alt="Rectangle501191"
          className="top-up-rectangle50"
        />
        <img
          src="/playground_assets/rectangle591191-fad-200h.png"
          alt="Rectangle591191"
          className="top-up-rectangle59"
        />
        <label className="top-up-text">
          <label>CHOOSE AMOUNT (BATH)</label>
        </label>
        <label className="top-up-text02">
          <label>
            CHOOSE A PAYMENT METHOD
            <label
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </label>
        </label>
        <div className="top-up-group49">
          <label className="top-up-text04">
            <label>Credit card</label>
          </label>
          <img
            src="/playground_assets/image54651-yl8p-200h.png"
            alt="image54651"
            className="top-up-image5"
          />
        </div>
        <label className="top-up-text06">
          <label>SELECT EXISTING PAYMENT METHOD</label>
        </label>
        <label className="top-up-text08">
          <label>Create New Payment Method</label>
        </label>
        <div className="top-up-group55">
          <div className="top-up-group54"></div>
        </div>
        <div className="top-up-group56">
          <div className="top-up-group29">
            <label className="top-up-text10">
              <button onClick={() => window.location.href="/home"}>Home</button>
            </label>
            <label className="top-up-text12">
              <button onClick={() => window.location.href="/course"}>Course</button>
            </label>
            <label className="top-up-text14">
              <button onClick={() => window.location.href="/mycourse"}>My Course</button>
            </label>
            <label className="top-up-text16">
              <button onClick={() => window.location.href="/top-up"}>Top up</button>
            </label>
          </div>
        </div>
        <img
          src="/playground_assets/ellipse101191-wr2-500h.png"
          alt="Ellipse101191"
          className="top-up-ellipse10"
        />
        {/* logo */}
        <img
          src="/playground_assets/image15011198-94jr-200h.png"
          alt="IMAGE15011198"
          className="top-up-image1501"
        />
        {/* setting */}
        <img onClick={() => window.location.href="/setting"}
          src="/playground_assets/image1111198-dwxb-200w.png"
          alt="IMAGE1111198"
          className="top-up-image111"
        />
        {/* profile */}
        <img  onClick={() => window.location.href="/setting"}
          src="/playground_assets/ellipse21198-nn5-200h.png"
          alt="Ellipse21198"
          className="top-up-ellipse2"
        />
        <img
          src="/playground_assets/image2011199-o9-200h.png"
          alt="IMAGE2011199"
          className="top-up-image201"
        />
        <img
          src="/playground_assets/loginrecovered311022-wn0f-200h.png"
          alt="loginRecovered311022"
          className="top-up-login-recovered31"
        />
        <label className="top-up-text18">
          <label>
            9999.00
            <label
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </label>
        </label>
        <img
          src="/playground_assets/image1411023-pcd8-200h.png"
          alt="IMAGE1411023"
          className="top-up-image141"
        />
        <img
          src="/playground_assets/imagepngtreehanddrawncartooncomputervideo536444121191-pk8-500h.png"
          alt="IMAGEPngtreehanddrawncartooncomputervideo536444121191"
          className="top-up-imag-pngtreehanddrawncartooncomputervideo53644412"
        />
        <label className="top-up-text20">
          <button onClick={() => window.location.href="/home"}>Cancel</button>
        </label>
        <label className="top-up-text22">
          <button onClick={() => window.location.href="/home"}>Top up</button>
        </label>
        <select className="top-up-select" onChange={handleSelect} >
          <option value={'Please SELECT'} >SELECT EXISTING PAYMENT METHOD</option>
          <option value={'Kplus'}>K Plus</option>
          <option value={'SCB'}>SCB</option>
          <option value={'KTB'}>KTB</option>
        </select>
        <button className="top-up-button" onClick={() => handleTopUp(300)}>300</button>
        <button className="top-up-button1" onClick={() => handleTopUp(600)}>600</button>
        <button className="top-up-button2" onClick={() => handleTopUp(900)}>900</button>
        <button className="top-up-button3" onClick={() => handleTopUp(1200)}>1200</button>
        <button className="top-up-button4" onClick={() => handleTopUp(1500)}>1500</button>
      </div>
    </div>
  )
}

export default TopUp

