import { useRef } from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import clockImg from "../../assets/clock.png";
import share from "../../assets/share.png";
import upload from "../../assets/upload.png";
import { AiOutlineClockCircle } from 'react-icons/ai';


const Home = () => {

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  }


  return ( 
    <div className="home">
      <Navbar />

      <div className="inputSection">
        <form action="">
          <div className="inputHeaders">
            <div className="depth">
              <label>Depth:</label> <span>Basic Scan</span> <span>Advanced Scan</span> 
            </div>
            <p>Result</p>
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
                  <p>Share Result</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default Home;