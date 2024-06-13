import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import DigitalMarketing from "../../pages/OurService/DigitalMarketing";

const Digital  = () => {
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
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInDownBig">
      <DigitalMarketing/>
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

export default Digital ;
