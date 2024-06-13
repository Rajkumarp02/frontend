import Terms from "../../Assests/Ourservice/BDE.png";
const License  = () => {
  return (
    <div className="row mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">License to Use the Website</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            Unless otherwise stated, Hurryep Technologies and/or its licensors own the intellectual property rights for all material on HURRYEP TECHNOLOGIES. All intellectual property rights are reserved.
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

export default License ;
