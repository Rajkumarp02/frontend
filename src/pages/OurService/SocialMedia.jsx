import BDE from "../../Assests/Ourservice/BAS.png";
const SocialMedia  = () => {
  return (
    <div className="row  mt-5 mt-md-0 mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Social Media Marketings</h6>
        </div>
        <div> 
            <p className="mt-md-3 service-team">
            From strategic content creation to community management and analytics, our team of social media experts will guide you through every step of the process. Whether you're looking to increase brand awareness, drive website traffic, or boost conversions, we'll develop a customized strategy to help you achieve your goals. 
            Elevate your brand's online presence and engagement with our expert social media marketing services.
            </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
        <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default SocialMedia ;
