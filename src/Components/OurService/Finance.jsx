import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import FinanceAndAuditing from "../../pages/OurService/Finance";
const Finance  = () => {
  return (
    <div className="container-fluid">
        <div className="row">
        <div className="col-12 img">
          <div className="p-5 text-md-start mt-3 mt-md-3 text-white" style={{
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "32px",
            font: "Poppins"
          }}>
          </div>
        </div>
      </div>
      <div className="">
      <FinanceAndAuditing/>
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

export default Finance ;
