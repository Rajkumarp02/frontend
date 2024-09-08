import Digital from "../../Assests/Ourservice/dm.png";
import './OurService.css';
const DigitalMarketing  = () => {
  return (
    <div className="row mt-5 mt-md-0 mx-5" data-aos="fade-up">
            <div className="col-md-12 col-lg-6  d-flex justify-content-center align-items-center">
                <img src={Digital} alt="discover our story" className="img-fluid rounded-2" />
            </div>
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-md-start">Digital Marketing</h6>
                </div>
                <div>
                    <p className="mt-md-3 service-team">
                    Elevate your online presence and reach your target audience effectively through our comprehensive digital marketing strategies. From search engine optimization (SEO) and pay-per-click (PPC) advertising to email marketing and content creation,
                     we devise tailored campaigns to boost your brand visibility, engagement, and conversion rates across various digital channels.
                    </p>
                </div>
                {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
                </div> */}
            </div>
        </div>
  );
};

export default DigitalMarketing ;
