import Terms from "../../Assests/Ourservice/BDE.png";
const GoveringLaw  = () => {
  return (
    <div className="row  mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">Governing Law</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            These Terms & Conditions are governed by and construed in accordance with the laws of India, 
            and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={Terms} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default GoveringLaw ;
