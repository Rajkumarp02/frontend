import Cancel from "./Cancel";
import Contact from "./Contact";
import Disclaimer from "./Disclaimer";
import Form from "./Form";
import OwnerShip from "./OwnerShip";
import Payment from "./Payment";
import PrivacyPolicy from "./PrivacyPolicy";
import Shipping from "./Shipping";
import TermsAndConditions from "./TermsAndConditions";
import ContactUs from "../../Components/Contact/Contact"
import Footer from "../../Components/Footer/Footer"
import '../../pages/OurService/OurService.css';
import "./Learn.css"
const LearnWithUs = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* <div className="col-12 img">
                    <div className="p-5 text-md-start mt-5 text-white" style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "32px",
                        font: "Poppins"
                    }}>
                        <h5>Home / Learn with Us</h5>
                    </div>
                </div> */}

                <div className="bg-main container-fluid mt-5">
                <div className="col-12 col-md-7 mt-5">
                        <Form />
                    </div>
                     <div className=" d-flex justify-content-center align-items-center justify-content-md-end align-items-md-end">
            <h3 className="text-bg-main d-flex align-items-end mb-4 mt-3 mt-md-0">Learn with Us!</h3>
            </div>
        </div>
                <div className="mt-5">
                    <PrivacyPolicy />
                </div>
                <div className="mt-5">
                    <Cancel />
                </div>
                <div className="mt-5">
                    <OwnerShip />
                </div>
                <div className="mt-5">
                    <Payment />
                </div>
                <div className="mt-3 rounded-5 p-md-5"style={{background:"rgba(255, 255, 255, 0.1)"}}>
                <div className="mt-5">
                    <Shipping />
                </div>
                <div className="mt-5">
                    <Contact />
                </div>
                <div className="mt-5">
                    <TermsAndConditions />
                </div>
                <div className="mt-5">
                    <Disclaimer />
                </div>
                </div>
                
                <div className="mt-5">
                    <ContactUs />
                </div>
                <div className="mt-5">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default LearnWithUs;
