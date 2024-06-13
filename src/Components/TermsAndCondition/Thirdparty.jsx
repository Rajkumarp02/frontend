import BDE from "../../Assests/Ourservice/BDE.png";
const Thirdparty  = () => {
  return (
    <div className="row mx-5">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">Third-Party Links</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            Our website may contain links to third-party websites. These third-party sites have separate and independent privacy policies. 
            We have no responsibility or liability for the content and activities of these linked sites. 
             </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  )
};

export default Thirdparty ;
