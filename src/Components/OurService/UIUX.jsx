import UIUx from "../../pages/OurService/UIUx";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const UIUX  = () => {
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
        <h5>Home / UI UX</h5>
      </div>
    </div>
  </div>
  <div className="">
  <UIUx/>
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

export default UIUX ;
