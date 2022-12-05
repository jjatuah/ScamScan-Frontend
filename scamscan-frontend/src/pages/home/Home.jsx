import { useRef, useState } from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import clockImg from "../../assets/clock.png";
import share from "../../assets/share.png";
import upload from "../../assets/upload.png";
import frame from "../../assets/Frame.png";
import success from "../../assets/success.png";
import failure from "../../assets/failure.png";
import android from "../../assets/android.png";
import apple from "../../assets/apple.png";
import github from "../../assets/github.png";
import phone from "../../assets/phone.png";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useEffect } from "react";


const Home = () => {

  const depth = ["Basic Scan", "Advanced Scan"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClickEvent = (index) => {
    setSelectedIndex(index)
  }

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  }

  useEffect(()=>{}, [selectedIndex])


  return ( 
    <div className="home">
      <Navbar />

      <div className="inputSection">
        <form action="">
          <div className="inputHeaders">
            <div className="depth">
              <label>Depth:</label>
                {
                  depth.map((item, index) => (
                    <span style={ index === selectedIndex ? {color:"#06A797", borderBottom: "1px solid #06A797"} : {}} onClick = { () => handleClickEvent (index) }>
                      {item}
                    </span>
                  ))
                }
               
            </div>
            <p className="resultTag">Result</p>
            <p className="clock"> <AiOutlineClockCircle style={{color:"#333333", fontSize: "22px"}}/> </p>
          </div>

          <div className="lowerSection">
            <div className="inputs">
              <textarea placeholder="Scamscan read your inputs. Start by typing or pasting in text or upload a readable picture. Let’s Start!"></textarea>
              <div className="uploadScan">
                <div className="upload">
                  <img src={upload} alt="#" />
                  <input type="file" name="file" id="file" ref={hiddenFileInput} onChange={handleChange} style={{display:'none'}} />
                  <label onClick={handleClick}>Upload File</label>
                </div>

                <button className="scanBtn" type="submit">Scan</button>
              </div>
            </div>

            <div className="result">

              <div className="blank">
                <div className="blankResult"></div>
                <div className="resultShare">
                  <img src={share} alt="" />
                  <a href="#">Share Result</a>
                </div>
              </div>

              <div className="noScam">
                <div className="bg"><img src={frame} alt="#" /></div>
                <div className="noScamResult">
                  <img src={success} alt="no scam" />
                  <p>Scanned... No scam</p>
                  <p>found in content</p>
                </div>
                <div className="resultShare">
                  <img src={share} alt="" />
                  <a href="#">Share Result</a>
                </div>
              </div>

              <div className="scam">
                <div className="bg"><img src={frame} alt="#" /></div>
                <div className="scamResult">
                  <img src={failure} alt="scam" />
                  <p>Beware Scam content</p>
                  <p>flagged!</p>
                </div>
                <div className="resultShare">
                  <img src={share} alt="" />
                  <a href="#">Share Result</a>
                </div>
              </div>

            </div>

          </div>
        </form>
      </div>

      <div className="downloadSection">
        <div className="downloadBg">
          <img src={frame} alt="#" />
          <img src={frame} alt="#" />
          <img src={frame} alt="#" />
          <img src={frame} alt="#" />
          <img src={frame} alt="#" />
        </div>
        <div className="app">
          <div className="appImg">
            <img src={phone} alt="#" />
          </div>
          <div className="appText">
            <h2>Easily access</h2> 
            <h2>Scamscan App!</h2>
            <p>Let Scamscan read and</p>
            <p>check messages for</p>
            <p>scams.</p>
            <a href="#">Download Now</a>
            <div className="applinks">
              <a href="#"><img src={android} alt="" /></a>
              <a href="#"><img src={apple} alt="" /></a>
              <span>or</span>
              <a href="#"><img src={github} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Home;