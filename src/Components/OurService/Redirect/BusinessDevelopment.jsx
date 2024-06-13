import BDE from "../../../Assests/Ourservice/bd-u.jpg";
import '../../../pages/OurService/OurService.css';

const BusinessDevelopment = () => {
  return (
    <div className="container-fluid" style={{
        border: "1px solid",
        borderRadius: "0px",
        background: "rgba(112, 191, 41, 0.1)",
        padding: 0
    }}>
      <div className="row no-gutters h-100">
        <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
          <img src={BDE} alt="discover our story" className="img-fluid rounded-2 w-100 h-100" />
        </div>
        <div className="col-md-12 col-lg-6 mt-o mt-md-5 d-flex flex-column justify-content-center p-4 p-md-5 h-100">
          <div>
            <h6 className="text-service text-md-start text-center">Business Development</h6>
          </div>
          <div>
            <p className="mt-md-3 service-team">
              Accelerate your business growth with our strategic business development services. We provide comprehensive analysis, market research, and strategic planning to identify new opportunities, expand your customer base, and maximize revenue streams.
              Our experienced team works closely with you to develop sustainable growth strategies aligned with your business objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDevelopment;
