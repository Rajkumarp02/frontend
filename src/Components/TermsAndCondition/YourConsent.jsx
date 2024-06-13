import BDE from "../../Assests/Ourservice/BDE.png";
const YourConsent  = () => {
  return (
    <div className="row mx-5">
    <div className="col-md-12 col-lg-6  d-flex justify-content-center align-items-center">
        <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">Your Consent</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            By using our website, you consent to our Privacy Policy and agree to its terms. Contact Us: If you have any questions or concerns about our Privacy Policy, please contact us viaMail or Phone. Please review this Privacy Policy periodically for any changes. 
            Your continued use of our website after any modifications indicates your acceptance of the updated Privacy Policy.
            </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  );
};

export default YourConsent;
