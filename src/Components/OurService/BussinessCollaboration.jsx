import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import 'animate.css';
import "./Main.css"
import BusinessCollaborations from "./Redirect/BussinessCollaboration";

const BussinessCollaboration = () => {
  return (
    <div className="container-fluid">
   <div className="row justify-content-center mt-lg-4">
        <div className="col-12 bg-bd img-fluid w-100 h-100 text-center text-md-start mx-5 p-1 p-lg-5 mt-5">
          <div className="p-md-5 mx-md-5 mt-5 mt-md-4">
            <h1 className="text-our mt-5 text-center mx-auto mx-md-0 text-md-start text-dark fw-bold ">
            Empowering Your Business Growth
            </h1>
            <div className="mt-md-0 mt-4 mb-md-0">
              <h3 className="text-main text-center text-md-start text-dark fw-semibold">Strategic Solutions for Lasting Success</h3>
            </div>
            <div className="mt-3 mb-3 mt-md-0 mt-mb-0" style={{ color: "rgba(112, 191, 41, 1)" }}>
              <h4 className="fw-semibold text-ours text-center text-md-start text-md-start text-small fs-bold">
              At Hurryep Technologies, we provide innovative business development services designed to help your company thrive in a competitive market.
               Our expert team is here to support your growth every step of the way
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 conatiner-fluid">
      <BusinessCollaborations/>
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

export default BussinessCollaboration;
