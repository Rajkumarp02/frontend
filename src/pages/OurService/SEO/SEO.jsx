import "./SEO.css"
import "../../OurService/DigitalMarketing/Digi.css";
import "../OurService.css"
import First from "./First";
import Second from "./Second";
import Unique from "./Unique";
import SeoCard from "./SeoCard";
import ProcessCard from "./ProcessCard";
import Benifits from "./Benifits";
import FAQ from "./FAQ";
import Contact from "../../../Components/Contact/Contact";
import Footer from "../../../Components/Footer/Footer";

const SEO  = () => {
  return (
     <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-12 bg-s img-fluid w-100 h-100 text-center text-md-start mx-5 p-1 p-lg-5 mt-5">
          <div className="p-md-5 mx-md-5 mt-5 mt-md-5">
            <h1 className="text-our text-start mx-auto mx-md-0 text-md-start text-dark fw-bold p-md-3">
            Best SEO Company in Madurai
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center align-items-center text-center trans-head">
                <div className="card p-4 p-md-2">
                    <h5 className="text-head p-2 p-md-2">Why Should You Use SEO Services?</h5>
                    <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                </div>
            </div>
            <div className="mt-5">
                <First />
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center text-center trans-head">
                <div className="card p-4 p-md-2">
                    <h5 className="text-head p-2 p-md-2">What makes our SEO company the best?</h5>
                    <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                </div>
            </div>
            <div className="mt-5">
                <Second />
            </div>
            <div className="mt-5">
                <Unique />
            </div>
            <div className="mt-2">
                <SeoCard />
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center text-center trans-head">
                <div className="card p-4 p-md-2">
                    <h5 className="text-head p=2 p-md-2">Our SEO Process</h5>
                    <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                </div>
            </div>
            <div className="mt-5"   style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
                <ProcessCard />
            </div>
            <div className="mt-5" style={{background:"rgba(11, 11, 11, 0.91)"}}>
             <Benifits/>
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

export default SEO ;
