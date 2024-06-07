import About from "../../Assests/Abouts/About1.png";
import "./About.css";
import "../Home/Home.css"

const AboutDiscover  = () => {
  return (
    <div className="container py-5">
   <div className="row d-flex justify-content-center align-items-center text-center text-md-start">
   <div className="col-md-6 col-12 d-flex justify-content-center align-items-center mb-3 mb-md-0">
        <img src={About} alt="discover our story" className="rounded-2 w-100 h-100"/>
    </div>
    <div className="col-md-12 col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start">
          <div>
            <p className="fw-semibold text-white text-about">DISCOVER OUR STORY</p>
            <div className="w-100 mx-auto mx-md-0" style={{ borderBottom: "4px solid #70BF29" }}></div>
          </div>
          <div>
            <h4 className="text-service mt-3 mb-2" style={{color:'#70BF29'}}>
            Delve into Our Origins: A Tale of Passion and Purpose
            </h4>
          </div>
          <div className="service-team">
            <p className="mt-3 text-white mb-3">
            Dedicated to client success, we've grown from humble beginnings to offer a diverse range of digital services including marketing, development, design, and strategy. Fueled by innovation, we aim to build the ultimate tech platform, leveraging emerging trends and technologies. As we continue to grow, our vision remains 
            clear: to create the biggest tech platform, leveraging the latest innovations and trending technologies.
            </p>
          </div>
        </div>
    </div>
    </div>
  );
};

export default AboutDiscover;
