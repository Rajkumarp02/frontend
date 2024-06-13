import mdu from "../../../Assests/Webdesign/4-u.jpg";
const Impact  = () => {
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
              <h6 className="text-service text-md-start text-center">See the Impact</h6>
          </div>
          <div>
              <p className="mt-md-3 service-team">
              Our solutions are intended to provide genuine, measurable outcomes that contribute to your bottom line
               </p>
          </div>
      </div>
      <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
          <img src={mdu} alt="discover our story" className="w-100 h-100" />
      </div>
  </div>
  </div>
  );
};

export default Impact ;
