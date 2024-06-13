import mdu from "../../../Assests/Webdesign/7-u.jpg";
const SearchMarketing  = () => {
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
            <h6 className="text-service text-md-start text-center">UX Design</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Our user-friendly design for users services can transform your website into a user-oriented look. We design engaging, approachable, and interactive experiences that satisfy visitors and encourage enduring client loyalty by putting the end-user first.
             </p>
        </div>
    </div>
</div>
</div>
  );
};

export default SearchMarketing ;
