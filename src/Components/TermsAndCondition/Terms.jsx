import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import NavbarComponent from "../Navbar/Navbar";
import Changes from "./Changes";
import ContactUS from "./ContactUS";
import Disclamier from "./Disclamier";
import GoveringLaw from "./GoveringLaw";
import License from "./License";
import Limitation from "./Limitation";
import PrivacyPolicy from "./PrivacyPolicy";
import ShippingPolicy from "./ShippingPolicy";
import "./Terms.css"
import TermsCondition from "./TermsCondition";
import UserContent from "./UserContent";
import UserRestrictions from "./UserRestrictions";
import Thirdparty from "./Thirdparty";
import YourConsent from "./YourConsent";
import Cookies from "./Cookies";
const Terms  = () => {
  return (
    <div className="container-fluid">
   <div className="row justify-content-center">
        <div className="col-12 bg-terms img-fluid w-100 h-100 text-center text-md-start mx-5 p-1 p-lg-5 mt-5">
          <div className="p-md-5 mx-md-5 mt-5 mt-md-5">
            <h1 className="text-our text-center mx-auto mx-md-0 text-md-start text-dark fw-bold">
            Terms & Conditions
            </h1>
            <div className="mt-md-2 mt-4 mb-md-4">
              <h3 className="text-main text-center text-md-start text-dark fw-semibold">Understanding Your Rights and Responsibilities</h3>
            </div>
            <div className="mt-3 mb-3 mt-md-2 mt-mb-3" style={{ color: "rgba(112, 191, 41, 1)"}}>
              <h4 className="fw-semibold text-ours text-center text-md-start text-md-start text-small fs-bold">Please read these terms and conditions carefully before using our services. By accessing or using our website, you agree to be bound by these terms.</h4>
            </div>
            </div>
            </div>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"#444343"
        }}>
    <TermsCondition/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"rgba(112, 191, 41, 0.1)"
        }}>
    <License/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"#444343"
        }}>
    <UserRestrictions/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"rgba(112, 191, 41, 0.1)"
        }}>
    <UserContent/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"#444343"
        }}>
    <Limitation/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"rgba(112, 191, 41, 0.1)"
        }}>
    <GoveringLaw/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"#444343"
        }}>
    <Changes/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"rgba(112, 191, 41, 0.1)"
        }}>
    <ContactUS/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"#444343"
        }}>
    <Thirdparty/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"rgba(112, 191, 41, 0.1)"
        }}>
    <Cookies/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"#444343"
        }}>
    <YourConsent/>
</div>
<div className="mt-5">
    <PrivacyPolicy/>
</div>
<div className="mt-5" style={{
            border:"1px solid", borderRadius:"20px",background:"#444343"
        }}>
    <ShippingPolicy/>
</div>
<div className=""style={{
            border:"1px solid", borderRadius:"20px",background:"rgba(112, 191, 41, 0.1)"
        }}>
    <Disclamier/>
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

export default Terms ;
