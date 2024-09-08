import "./Whatsapp.css"
import "../SEO/SEO.css";
import "../../OurService/DigitalMarketing/Digi.css";
import "../OurService.css";
import First from "./First";
import Second from "./Second";
import SecondBox from "./SecondBox";
import Unique from "./Unique";
import WhatsappCard from "./WhatsappCard";
import Benefits from "./ProcessCard";
import FAQ from "./FAQ";
import Contact from "../../../Components/Contact/Contact";
import Footer from "../../../Components/Footer/Footer";

const Whatsapp = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center mt-4">
                <div className="col-12 bg-w img-fluid w-100 h-100 text-center text-md-start mx-5 p-1 p-lg-5 mb-3 mt-5">
                    <div className="p-md-5 mx-md-5 mt-5 mt-md-5">
                        <h1 className="text-our text-start mx-auto mx-md-0 text-md-start text-dark fw-bold mb-4 mt-md-3">
                            Whatsapp Marketing Service in Chennai
                        </h1>
                    </div>
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center text-center trans-head">
                <div className="card p-4 p-md-2">
                    <h5 className="text-head p-2 p-md-2">
                        What is Whatsapp Marketing?
                    </h5>
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
                    <h5 className="text-head p-2 p-md-2">
                        Why choose Whatsapp Marketing?
                    </h5>
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
                <SecondBox />
            </div>
            <div className="mt-5">
                <Unique />
            </div>
            <div className="col-md-12 b-se">
                <div className="p-md-5 mt-3 mt-md-1 text-center">
                    <div className="d-lg-flex justify-content-lg-center align-items-lg-center gap-lg-2">
                        <h5 className="container w-75 para-second"
                        >You may have heard that there is always a way to combine the different elements and features in WhatsApp marketing in order to match them to various industries depending on their requirements. Have a look at the following examples:</h5>
                    </div>
                </div>
            </div>
            <div className="mt-5">
            <WhatsappCard/>
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

export default Whatsapp;
