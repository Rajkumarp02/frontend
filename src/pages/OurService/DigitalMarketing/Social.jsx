import mdu from "../../../Assests/Webdesign/8-u.jpg";
const Social  = () => {
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
              <h6 className="text-service text-md-start text-center">Mobile Responsive</h6>
          </div>
          <div>
              <p className="mt-md-3 service-team">
              Adaptive mobile design solutions can help you embrace the mobile age. With our websites, you may browse content on all devices with maximum ease and comfort regardless of screen size.
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

export default Social ;
