import In from "../../Assests/Ourservice/IM.png";
import './OurService.css';
const Influence  = () => {
  return (
    <div className="row mt-5 mt-md-0 mx-5">
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-md-start">Influencer Marketing</h6>
                </div>
                <div>
                    <p className="mt-md-3 service-team">
                    Amplify your brand's reach and engagement with our expert influencer marketing services. We specialize in connecting brands with top influencers to create authentic and impactful campaigns that resonate with your target audience. Our team of influencer marketing experts will work closely with you to identify the perfect influencers for your brand,
                     ensuring that their values align with yours and their audience matches your target demographic. 
                     </p>
                </div>
                {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
                </div> */}
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
    <img src={In} alt="discover our story" className="img-fluid rounded-2" />
            </div>
        </div>
  );
};

export default Influence ;
