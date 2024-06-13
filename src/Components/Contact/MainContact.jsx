import Footer from "../Footer/Footer";
import Contact from "./Contact";
import "./Contact.css"
import "../../pages/OurService/OurService.css"
const MainContact  = () => {
  return ( 
    <div className="container-fluid mt-3 mt-md-2 mt-lg-0">
      <div className="row justify-content-center">
        <div className="col-12 bg-contact img-fluid w-100 h-100 text-center text-md-start mx-5 p-1 p-lg-5 mt-5">
          <div className="p-md-5 mx-md-5 mt-3 mt-md-5">
            <h1 className="text-our text-center mx-auto mx-md-0 text-md-start text-dark fw-bold">
            Get in Touch with Us
            </h1>
            <div className="mt-md-2 mt-4 mb-md-4">
              <h3 className="text-main text-center text-md-start text-dark fw-semibold">We’re Here to Help and Answer Any Questions You Might Have</h3>
            </div>
            <div className="mt-3 mb-3 mt-md-2 mt-mb-3" style={{ color: "rgba(112, 191, 41, 1)"}}>
              <h4 className="fw-semibold text-ours text-center text-md-start text-md-start text-small fs-bold">Contact Hurryep Technologies today to learn more about our services or to get support from our dedicated team.</h4>
            </div>
            </div>
            </div>
</div>
<div className="mt-5 mt-md-0">
  <Contact/>
</div>
<div className="mt-5 mt-md-0">
  <Footer/>
</div>
</div>
  );
};

export default MainContact ;
