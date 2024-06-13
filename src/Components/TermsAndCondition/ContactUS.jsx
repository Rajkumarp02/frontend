import BDE from "../../Assests/Ourservice/BDE.png";
const ContactUS  = () => {
  return (
    <div className="row mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">Contact Us</h6>
        </div>
        <div>
        <p className="mt-3 service-team">
        If you have any questions about these Terms & Conditions, please contact us via Mail or Phone. By using HURRYEP TECHNOLOGIES, you signify your acceptance of these Terms & Conditions. 
        If you do not agree to these Terms & Conditions, please do not use HURRYEP TECHNOLOGIES.
          </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default ContactUS ;
