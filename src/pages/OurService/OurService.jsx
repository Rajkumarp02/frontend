
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import AppDevelopment from "./AppDevelopment";
import BrandPromotion from "./BrandPromotion";
import BusinessAnalyst from "./BusinessAnalyst";
import BusinessCollaborations from "./BusinessCollaborations";
import BusinessDevelopment from "./BusinessDevelopment";
import DigitalMarketing from "./DigitalMarketing";
import EmailMarketing from "./EmailMarketing";
import GraphicDesign from "./GraphicDesign";
import Influence from "./Influence";
import SEOService from "./SEOService";
import UIUx from "./UIUx";
import WebDevelopment from "./WebDevelopment";
import VideoEdit from "./VideoEdit";
import SocialMedia from "./SocialMedia";
import Finance from "./Finance";
import Legal from "./Legal";
import './OurService.css';
import "../Home/Home.css";

const OurService = () => {

  return (
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-12 our img-fluid w-100 h-100 text-center text-md-start mx-5 p-1 p-lg-5 mt-5">
          <div className="p-md-5 mx-md-5 mt-5 mt-md-5">
            <h1 className="text-our text-center mx-auto mx-md-0 text-md-start text-dark fw-bold">
              Innovative Solutions for Tomorrow’s Challenges
            </h1>
            <div className="mt-3 mb-3 mt-md-2 mt-mb-3" style={{ color: "rgba(112, 191, 41, 1)" }}>
              <h4 className="fw-semibold text-ours text-center text-md-start text-md-start text-small fs-bold">
                Cutting-edge Technology Services Tailored for Your Business
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "#444343" }}>
        <BusinessDevelopment />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
        <BusinessCollaborations />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "#444343" }}>
        <WebDevelopment />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
        <AppDevelopment />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "#444343" }}>
        <DigitalMarketing />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
        <BusinessAnalyst />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "#444343" }}>
        <SEOService />
      </div>
      <div id="wp"className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
        <UIUx />
      </div>
      <div id="ppc" className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "#444343" }}>
        <GraphicDesign />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
        <Influence />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "#444343" }}>
        <EmailMarketing />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
        <BrandPromotion />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "#444343" }}>
        <VideoEdit />
      </div>
      <div  className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
        <SocialMedia />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "#444343" }}>
        <Finance />
      </div>
      <div className="mt-5" style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
        <Legal />
      </div>
      <div className="mt-5">
        <Contact />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default OurService;
