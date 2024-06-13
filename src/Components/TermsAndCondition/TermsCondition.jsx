import Terms from "../../Assests/Ourservice/BDE.png";
import "../../pages/OurService/OurService.css"
const TermsCondition  = () => {
  return (
    <div className="row mx-5">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={Terms} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">Terms & Conditions</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            Welcome to HURRYEP TECHNOLOGIES These Terms & Conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these Terms & Conditions in full. 
            Do not continue to use HURRYEP TECHNOLOGIES if you do not accept all of the Terms & Conditions stated on this page.
             </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  );
};

export default TermsCondition ;
