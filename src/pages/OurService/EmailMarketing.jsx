import Email from "../../Assests/Ourservice/Email.png";
import './OurService.css';
const EmailMarketing  = () => {
  return (
    <div className="row mt-5 mt-md-0 mx-5" id="em">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={Email} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Email Marketing</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Maximize your reach and engagement with our comprehensive email marketing services. We specialize in crafting personalized and targeted email campaigns that drive results. From designing eye-catching templates to crafting compelling content and analyzing performance metrics, 
            our team of email marketing experts will guide you through every step of the process. 
            </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  );
};

export default EmailMarketing ;
