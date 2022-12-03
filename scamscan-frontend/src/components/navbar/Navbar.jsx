import "./Navbar.css";
import logo from "../../assets/SSLogo.png"

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="navElements">

        <div className="navLogoDetails">
          <img src={logo} alt="ScamScan Logo"/>
          <h2>ScamScan</h2>
        </div>

        <div className="navLinks">
          <a href="#">About</a>
          <a href="#">Feedback</a>
          <a href="#" className="button">Get App</a>
        </div>

      </div>
    </div>
   );
}
 
export default Navbar;