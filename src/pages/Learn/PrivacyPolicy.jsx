import Im from "../../Assests/Ourservice/Im-u.jpg"
const PrivacyPolicy  = () => {
  return (
    <div className="container-fluid" style={{
        border: "1px solid",
        borderRadius: "0px",
        background: "rgba(112, 191, 41, 0.1)",
        padding: 0
    }}>
      <div className="row no-gutters h-100">
      <div className="col-md-12 col-lg-6 mt-o mt-md-5 d-flex flex-column justify-content-center p-4 p-md-5 h-100">
          <div>
              <h6 className="text-service text-md-start text-center">Privacy Policy</h6>
          </div>
          <div>
              <p className="mt-md-3 service-team">
              At Hurryep Technologies, safeguarding the privacy of our customers' personal information is of utmost importance. We collect only essential data necessary for delivering our services and ensure its secure storage and use solely for enhancing our services and communicating with our customers. We do not disclose or sell any personal information to third parties without explicit consent from our customers. 
              By utilizing our services, customers implicitly agree to our Privacy Policy. 
               </p>
          </div>
      </div>
      <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
          <img src={Im} alt="discover our story" className="w-100 h-100" />
      </div>
  </div>
  </div>
  );
};

export default PrivacyPolicy ;
