import BusinessDevelopment from "../../pages/OurService/BusinessDevelopment";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const BussinessDevelopment = () => {
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
            <h5>Home / BussinessDevelopment</h5>
          </div>
        </div>
      </div>
      <div className="">
      <BusinessDevelopment />
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

export default BussinessDevelopment;
