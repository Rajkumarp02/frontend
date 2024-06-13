import Terms from "../../Assests/Ourservice/BDE.png";
const UserRestrictions  = () => {
  return (
    <div className="row mx-5">
        <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                <img src={Terms} alt="discover our story" className="img-fluid rounded-2" />
            </div>
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-center text-md-start">User Restrictions</h6>
                </div>
                <div>
                    <p className="mt-3 service-team">
                    Republish material from HURRYEP TECHNOLOGIES. Sell, rent, or sub-license material from HURRYEP TECHNOLOGIES. Reproduce, duplicate, or copy material from HURRYEP TECHNOLOGIES. Redistribute content from HURRYEP TECHNOLOGIES (unless content is specifically made for redistribution).
                    </p>
                </div>
                {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
                </div> */}
            </div>
        </div>
  );
};

export default UserRestrictions ;
