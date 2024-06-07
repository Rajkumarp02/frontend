import BDE from "../../Assests/Ourservice/BDE.png";
import './OurService.css';

const BusinessDevelopment = () => {
    return (
        <div className="row mt-5 mt-md-0 mx-5">
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
            </div>
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-md-start">Business Development</h6>
                </div>
                <div>
                    <p className="mt-md-3 service-team">
                    Accelerate your business growth with our strategic business development services. We provide comprehensive analysis, market research, and strategic planning to identify new opportunities, expand your customer base, and maximize revenue streams.
                     Our experienced team works closely with you to develop sustainable growth strategies aligned with your business objectives.
                    </p>
                </div>
                {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
                </div> */}
            </div>
        </div>
    );
}

export default BusinessDevelopment;
