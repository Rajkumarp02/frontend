import "./Email.css"
import "../SEO/SEO.css";
import "../../OurService/DigitalMarketing/Digi.css";
import "../OurService.css";
import First from "./First";
import Second from "./Second";
import EmailCard from "./EmailCard";
import Unique from "./Unique";
import ProcessCard from "./ProcessCard";
import Benefits from "./Benefits";
import FAQ from "./FAQ";
import Contact from "../../../Components/Contact/Contact";
import Footer from "../../../Components/Footer/Footer";

const Email  = () => {
  return (
    <div className="container-fluid mt-3">
    <div className="row justify-content-center">
        <div className="col-12 bg-em img-fluid w-100 h-100 text-center text-md-start mx-5 p-1 p-lg-5 mt-5">
            <div className="p-md-5 mx-md-5 mt-5 mt-md-5">
                <h1 className="text-our text-start mx-auto mx-md-0 text-md-start text-dark fw-bold p-md-3">
                Email Marketing Company in Chennai
                </h1>
            </div>
        </div>
    </div>
    <div className="mt-5 d-flex justify-content-center align-items-center text-center trans-head">
                <div className="card p-4 p-md-2">
                    <h5 className="text-head p-2 p-md-2">
                    What is Email Marketing? 
                    </h5>
                    <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                </div>
            </div>
            <div className="mt-5">
              <First/>
            </div>
            <div className="mt-5">
              <Second/>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center text-center trans-head">
                <div className="card p-4 p-md-2">
                    <h5 className="text-head p-2 p-md-2">
                    What are the features of email marketing services?
                    </h5>
                    <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                </div>
            </div>
            <div className="mt-5">
              <EmailCard/>
            </div>
            <div className="mt-5">
              <Unique/>
            </div>
            <div className="mt-5">
                <ProcessCard/>
             </div>
             <div className="mt-5">
                <Benefits/>
             </div>
             <div className="mt-5">
                <FAQ/>
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

export default Email ;
