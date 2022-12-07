import "./MemberCard.css";
import member1 from "../../assets/member1.png";
import twitter from "../../assets/Twitter - Negative.png";
import instagram from "../../assets/Instagram - Negative.png";
import linkdin from "../../assets/LinkedIn - Negative.png";


const MemberCard = ({name = "Tasiu Kwaplong", role = "Project Lead", profileImg=member1,}) => {
  return ( 
    <div className="memberCard">
      <div className="memberImage">
        <img src={profileImg} alt="profile image" />
      </div>

      <h2>{name}</h2>
      <span>{role}</span>

      <div className="soMedia">
        <a href="#"><img src={twitter} alt="twitter logo" /></a>
        <a href="#"><img src={instagram} alt="instagram logo" /></a>
        <a href="#"><img src={linkdin} alt="linkdIn logo" /></a>
      </div>
    </div>
   );
}
 
export default MemberCard;