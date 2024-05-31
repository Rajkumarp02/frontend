import { Link } from "react-router-dom";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import HomeAbout from "./HomeAbout";
import HomeOurService from "./HomeOurService";
import HomeWorkflow from "./HomeWorkflow";
import Service from "./Service";
import Testmonials from "./Testmonials";
const Home  = () => {
  return ( 
    <div className="container-fluid">
      <div className="row justify-content-center">
       <div className="col-12 img bg-dark w-100 h-100 text-center text-md-start mx-5">
           <div className="p-md-5 mx-md-5 mt-5 mt-md-0">
            <h1 className="text-home text-white text-start animate__animated animate__backInLeft" style={{fontWeight:"600"}}>
              Empower Business with
               <br/>
                Trending Technologies
              </h1>
              <div className="" style={{color: "rgba(112, 191, 41, 1)"}}>
              <h4 className="mt-5 fs-3 py-3 text-start fs-bold animate__animated animate__backInRight">One-stop solution for all your digital needs</h4>
              </div>
              <div className="mt-3">
              <Link to="/aboutus">
          <button className="btn text-center text-md-start" style={{ borderRadius: "50px",color:"#70BF29",borderColor:"#70BF29",border:"2px solid",fontSize:"18px",fontWeight:"600" }}>Discover More</button>
          </Link>
               </div>
           </div>
       </div>
      </div>
        <div className="mt-5 animate__animated animate__fadeInDownBig">
         <HomeAbout/>
       </div>
       <div className="mt-5 ">
         <HomeWorkflow/>
       </div>
       <div className="mt-5">
         <HomeOurService/>
       </div>
       <div className="mt-5">
         <Service/>
       </div>
        <div className="mt-5 mt-md-0">
         <Testmonials/>
       </div>
       <div className="mt-5">
         <Contact/>
       </div>
       <div className="mt-5">
         <Footer/>
       </div> 
    </div>
  );
};

export default Home ;
