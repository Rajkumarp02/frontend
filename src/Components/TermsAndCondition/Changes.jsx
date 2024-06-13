import BDE from "../../Assests/Ourservice/BDE.png";
const Changes  = () => {
  return (
    <div className="row mx-5">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">Changes to This Agreement</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            Hurryep Technologies, reserves the right to modify these Terms & Conditions at any time. We will notify you of any changes by posting the new Terms & Conditions on this page. Your continued use of HURRYEP TECHNOLOGIES 
            after any such modifications constitutes your acceptance of the new Terms & Conditions.
             </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  );
};

export default Changes ;
