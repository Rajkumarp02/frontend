import mdu from "../../../Assests/Webdesign/2-u.jpg";
const ProTeam  = () => {
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
              <h6 className="text-service text-md-start text-center">Pro Team, Pro Results</h6>
          </div>
          <div>
              <p className="mt-md-3 service-team">
              Our experienced team of digital specialists is ready to help you every step of the way, assuring the best results.
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

export default ProTeam ;
