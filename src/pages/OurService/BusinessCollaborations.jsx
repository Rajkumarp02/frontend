import BDE from "../../Assests/Ourservice/BDE.png";
import './OurService.css';
const BusinessCollaborations  = () => {
  return (
    <div className="row mt-5 mt-md-0 mx-5">
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-md-start">Business Collaborations</h6>
                </div>
                <div> 
                    <p className="mt-md-3 service-team">
                    Forge valuable partnerships and collaborations to drive mutual success with our business collaborator services. We facilitate connections with like-minded businesses, 
                    startups, and industry experts to explore synergies, share resources, and unlock new opportunities for innovation and growth.
                   </p>
                </div>
                {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
                </div> */}
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
                <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
            </div>
        </div>
  );
};

export default BusinessCollaborations ;
