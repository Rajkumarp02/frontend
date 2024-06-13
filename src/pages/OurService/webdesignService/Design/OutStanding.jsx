import out from "../../../../Assests/Webdesign/4-u.jpg"
const OutStanding  = () => {
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
            <h6 className="text-service text-md-start text-center">Outstanding Content</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Improve your web visibility by producing top-notch content. Our skilled content producers create interesting, timely, 
            and educational content that connects with your audience and encourages more engagement and brand loyalty.
             </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
        <img src={out} alt="discover our story" className="w-100 h-100" />
    </div>
</div>
</div>
  );
};

export default OutStanding ;
