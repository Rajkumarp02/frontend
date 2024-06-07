import { Link } from "react-router-dom";
import HomeAbt from "../../Assests/Home/home-about.png";
import "./Home.css";

const HomeAbout = () => {
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center text-center text-md-start">
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center mb-3 mb-md-0">
          <img src={HomeAbt} alt="home-about" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start">
          <div>
            <p className="fw-semibold text-white text-about">About Us</p>
            <div className="w-100 mx-auto mx-md-0" style={{ borderBottom: "4px solid #70BF29" }}></div>
          </div>
          <div>
            <h4 className="text-service mt-3 mb-2">
              Transform Your Business with Our Dynamic Solutions
            </h4>
          </div>
          <div className="service-team">
            <p className="mt-3 text-white mb-3">
              Step into the fast lane of digital success with Hurryep Technologies! Here, innovation meets expertise as we tailor solutions to supercharge your online growth. Count on us to not only enhance your website but also to sculpt your brand's digital persona and magnetize your target audience. 
              With our holistic approach, expect nothing less than a seamless journey towards unparalleled digital triumph.
            </p>
          </div>
          <div>
            <Link to="/aboutus">
              <button className="btn" style={{ borderRadius: "50px", color: "#70BF29", borderColor: "#70BF29", border: "2px solid", fontSize: "18px", fontWeight: "600" }}>Discover More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
