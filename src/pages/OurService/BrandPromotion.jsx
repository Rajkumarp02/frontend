import dm from "../../Assests/Ourservice/dm.png";
import './OurService.css';
const BrandPromotion  = () => {
  return (
    <div className="row  mt-5 mt-md-0  mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Brand Promotion</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Elevate your brand's presence and drive engagement with our dynamic branding and promotion services. We specialize in creating memorable brand experiences that captivate audiences and foster lasting connections. From crafting compelling brand identities to developing strategic promotional campaigns, our 
            team of experts will work tirelessly to ensure that your brand stands out in today's competitive landscape.
            </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
        <img src={dm} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default BrandPromotion ;
