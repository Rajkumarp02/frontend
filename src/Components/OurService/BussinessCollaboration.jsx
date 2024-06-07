import Footer from "../Footer/Footer";
import BEC from "../../pages/OurService/BusinessCollaborations"
import Contact from "../Contact/Contact";
import 'animate.css';

const BussinessCollaboration = () => {
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
            <h5>Home / BussinessCollaboration</h5>
          </div>
        </div>
      </div>
      <div className="">
      <BEC />
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
