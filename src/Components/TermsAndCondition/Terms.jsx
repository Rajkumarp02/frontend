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
    <div className="row">
  <div className="col-12 img">
     <div className="p-5 text-md-start mt-5 text-white" style={{
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "32px",
      font:"Poppins"
     }}>
      <h5>Home / Terms & Conditions</h5>
     </div>
  </div>
</div>
<div className="mt-5">
    <TermsCondition/>
</div>
<div className="mt-5">
    <License/>
</div>
<div className="mt-5">
    <UserRestrictions/>
</div>
<div className="mt-5">
    <UserContent/>
</div>
<div className="mt-5">
    <Limitation/>
</div>
<div className="mt-5">
    <GoveringLaw/>
</div>
<div className="mt-5">
    <Changes/>
</div>
<div className="mt-5">
    <ContactUS/>
</div>
<div className="mt-5">
    <Thirdparty/>
</div>
<div className="mt-5">
    <Cookies/>
</div>
<div className="mt-5">
    <YourConsent/>
</div>
<div className="">
    <PrivacyPolicy/>
</div>
<div className="">
    <ShippingPolicy/>
</div>
<div className="">
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
