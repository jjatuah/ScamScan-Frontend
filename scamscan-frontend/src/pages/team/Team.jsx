import "./Team.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


const Team = () => {
  return ( 
    <div className="team">
      <Navbar />

      <div className="teamText">
        <div className="teamTextHeader">
          <h2>Meet Team</h2>
          <h2>ScamScan Experts</h2>
        </div>
        <div className="teamTextDesc">
          <p>Our team of experts from GDG Lafia worked on a system that provides</p>
          <p>preventive measures to fraudulent messages online. Ranging from text</p>
          <p>analysis, url probing, fraudulent call interception to image recognition and analysis.</p>
        </div>

      </div>
      <Footer />
    </div>
   );
}
 
export default Team;