import { Link } from "react-router-dom";
import HomeAbt from "../../Assests/Home/Home-abt.jpg"
import "./Home.css";
const HomeAbout  = () => {
  return (
    <div className="row p-md-5">
      <div className="col-md-12 col-lg-6 col-12 justify-content-center">
          <img src={HomeAbt} alt="home-about" className="w-100 h-100 rounded-4"/>
      </div>
      <div className="col-md-12 col-lg-6 mt-md-3 mt-lg-0">
        <div>
            <p className="" style={{
                fontWeight:"500",
                fontSize:"18px",
                lineHeight:"32px"
            }}>ABOUT US</p>
        </div>
        <div>
            <h4 className="text-service">
             Transform Your Business with Our <br/> Dynamic Solutions</h4>
        </div>
        <div>
            <p className="mt-2 service-team">
            Step into the fast lane of digital success with Hurryep Technologies! Here, innovation meets expertise as we tailor solutions to supercharge your online growth. Count on us to not only enhance your website but also to sculpt your brand's digital persona and magnetize your target audience. 
            With our holistic approach, expect nothing less than a seamless journey towards unparalleled digital triumph
            </p>
        </div>
        <div>
          <Link to="/aboutus">
          <button className="btn text-center text-md-start" style={{ borderRadius: "50px",color:"#70BF29",borderColor:"#70BF29",border:"2px solid",fontSize:"18px",fontWeight:"600" }}>Discover More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout ;
