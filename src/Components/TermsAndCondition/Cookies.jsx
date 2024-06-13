import BDE from "../../Assests/Ourservice/BDE.png";
const Cookies  = () => {
  return (
    <div className="row  mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">Cookies</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            We may use cookies to enhance your experience on our website.
            You have the option to disable cookies through your browser settings, although this may affect your ability to access certain features of the site. 
              </p>
        </div>
        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default Cookies ;
