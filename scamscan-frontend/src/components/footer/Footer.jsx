
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkdIn from "../../assets/linkdIn.png";
import android from "../../assets/android.png";
import apple from "../../assets/apple.png";



const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footerLinksContainer">

        <div className="footerLink">
          <h3>Product</h3>
          <a href="#">Individuals</a>
          <a href="#">Team</a>
          <a href="#">Technology</a>
          <a href="#">Security</a>
          <a href="#">Integrations</a>
        </div>

        <div className="footerLink">
          <h3>Resources</h3>
          <a href="#">How-To's</a>
          <a href="#">Case Studies</a>
          <a href="#">Help</a>
        </div>

        <div className="footerLink">
          <h3>Headquarters</h3> 
          <p>GDG Lafia, 02 Innov</p>
          <p>Lab, Lafia, Nasarawa</p>
          <p>State</p>
        </div>

        <div className="footerLink">
          <h3>Connect</h3>
          <div className="socials">
            <a href="#"><img src={twitter} alt="twitter logo" /></a>
            <a href="#"><img src={facebook} alt="facebook logo" /></a>
            <a href="#"><img src={linkdIn} alt="linkdin logo"/></a>
          </div>
        </div>

        <div className="footerLink">
          <h3>Apps</h3>
          <div className="appLink">
            <a href="#"><img src={apple} alt="#" /></a>
            <a href="#"><img src={android} alt="#" /></a>
          </div>
        </div>

      </div>

      <div className="extraInfo">
        <div className="copyright">
          <p>Copyright 2022 (c) GDG Lafia</p>
        </div>

        <div className="extraLinks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">DMCA and Copyright Abuse Policy</a>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;