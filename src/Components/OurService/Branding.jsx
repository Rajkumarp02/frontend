import BrandPromotion from "../../pages/OurService/BrandPromotion";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Branding  = () => {
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-12 img">
      <div className="p-5 text-md-start mt-3 mt-md-5 text-white" style={{
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "32px",
        font: "Poppins"
      }}>
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
