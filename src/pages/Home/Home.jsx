import { Link } from "react-router-dom";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import HomeAbout from "./HomeAbout";
import HomeOurService from "./HomeOurService";
import HomeWorkflow from "./HomeWorkflow";
import Service from "./Service";
import Testmonials from "./Testmonials";
const Home = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-12 bg-home img-fluid w-100 h-100 text-center text-md-start mx-5 p-4 mt-5">
          <div className="p-md-5 mx-md-5 mt-md-5">
            <h1 className="text-home text-dark fw-bold text-start">
              Empower Business
              with Trending
              Technologies
            </h1>
            <div className="mt-2" style={{ color: "rgba(112, 191, 41, 1)"}}>
              <h4 className="fw-semibold text-start fs-bold" style={{fontSize:"18px"}}>One-stop solution for all your digital needs</h4>
            </div>
            <div className="mt-3">
              <Link to="/aboutus">
                <button className="btn text-center text-md-start" style={{ borderRadius: "50px", border: "2px solid #70BF29", fontSize: "18px", fontWeight: "600" }}>Discover More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <HomeAbout />
      </div>
      <div className="mt-5 ">
        <HomeWorkflow />
      </div>
      <div className="mt-5 mt-md-2">
        <HomeOurService />
      </div>
      {/* <div className="mt-5">
        <Service />
      </div> */}
      <div className="mt-5 mt-md-0">
        <Testmonials />
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

export default Home;