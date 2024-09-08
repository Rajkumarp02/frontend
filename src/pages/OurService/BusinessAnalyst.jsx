import BAS from "../../Assests/Ourservice/BAS.png";
import './OurService.css';
const BusinessAnalyst  = () => {
  return (
    <div className="row  mt-5 mt-md-0  mx-5" data-aos="fade-up">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Business Analysis & Strategies</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            we specialize in providing tailored business analysis and strategic planning services. Our expert team conducts thorough assessments to uncover growth opportunities and develop robust strategies aligned with your goals. With a focus on data-driven insights and collaborative planning,
            we empower businesses to navigate challenges and achieve sustainable success in today's dynamic market.
           </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-md-0" >
        <img src={BAS} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default BusinessAnalyst ;
