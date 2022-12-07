import "./Team.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MemberCard from "../../components/member/MemberCard";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import twitter from "../../assets/twDark.png";
import facebook from "../../assets/fbDark.png";
import linkdIn from "../../assets/lkiDark.png";


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
          <p>Our team of experts from <strong>GDG Lafia</strong> worked on a system that provides</p>
          <p>preventive measures to fraudulent messages online. Ranging from text</p>
          <p>analysis, url probing, fraudulent call interception to image recognition and</p>
          <p>analysis.</p>
        </div>

      </div>

      <div className="membersContainer">
        <MemberCard name="Tasiu Kwaplong" role="Project Lead" profileImg={member1} />
        <MemberCard name="Ruthie Young" role="QCC" profileImg={member2} />
        <MemberCard name="AbdulBasit Ajibade" role="UX Designer" profileImg={member3} />
        <MemberCard name="DesRuq Mania" role="UX Designer" profileImg={member1} />
        <MemberCard name="Ameer Ipynb" role="Data Scientist" profileImg={member1} />
        <MemberCard name="Joseph Jatuah" role="Frontend Dev" profileImg={member1} />
        <MemberCard name="Anthony" role="Mobile Dev" profileImg={member1} />
        <MemberCard name="Akor" role="Data Sampling Expert" profileImg={member1} />
      </div>

      <Footer bg="#fff" headerColor="#06A797" otherColor="#002824" twImg={twitter} lkiImg={linkdIn} fbImg={facebook} />
    </div>
   );
}
 
export default Team;