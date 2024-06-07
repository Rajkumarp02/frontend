import BrandPromotion from "../../pages/OurService/BrandPromotion";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Branding  = () => {
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-12 img">
      <div className="p-5 text-md-start mt-5 text-white" style={{
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "32px",
        font: "Poppins"
      }}>
        <h5>Home / Branding and  Auditing</h5>
      </div>
    </div>
  </div>
  <div className="">
  <BrandPromotion/>
  </div>
<div className="mt-5">
    <Contact/>
  </div>
  <div className="mt-5">
    <Footer />
  </div>
</div>
  );
};

export default Branding ;
