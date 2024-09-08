import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import AboutDiscover from "./AboutDiscover";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import "./About.css"
const AboutUs  = () => {
  return (
    <div className="container-fluid mt-4 mt-md-3">
       <div className="row justify-content-center">
        <div className="col-12 abt img-fluid w-100 h-100 text-center text-md-start mx-5 p-4 mt-5">
          <div className="p-md-5 mx-md-5 mt-md-5 mt-md-0">
            <h1 className="text-home text-dark fw-bold text-start">
            Elevating Businesses with Strategic Innovation
            </h1>
            <div className="mt-2 mt-xl-5" style={{ color: "rgba(112, 191, 41, 1)"}}>
              <h4 className="fw-semibold text-abts text-start text-small fs-bold">Partnering with You to Drive Growth and Achieve Success</h4>
            </div>
            </div>
            </div>
    </div>
    <div className="mt-3">
        <AboutDiscover/>
    </div>
    <div className="mt-1">
        <OurMission/>
    </div>
    <div className="mt-5">
        <OurTeam/>
    </div>
    <br/>
    <div className="mt-5">
        <Contact/>
    </div>
    <div className="mt-5">
        <Footer/>
    </div>
    </div>
  );
};

export default AboutUs ;
