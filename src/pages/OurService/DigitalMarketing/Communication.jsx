import mdu from "../../../Assests/Webdesign/5-u.jpg";
const Communication  = () => {
  return (
    <div className="container-fluid" style={{
      border: "1px solid",
      borderRadius: "0px",
      background: "rgba(112, 191, 41, 0.1)",
      padding: 0
  }}>
    <div className="row no-gutters h-100">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
        <img src={mdu} alt="discover our story" className="w-100 h-100" />
    </div>
    <div className="col-md-12 col-lg-6 mt-o mt-md-5 d-flex flex-column justify-content-center p-4 p-md-5 h-100">
        <div>
            <h6 className="text-service text-md-start text-center">Clear Communication</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            We believe in keeping you informed at all times, through honest communication and regular updates.
             </p>
        </div>
    </div>
</div>
</div>
  );
};

export default Communication ;
