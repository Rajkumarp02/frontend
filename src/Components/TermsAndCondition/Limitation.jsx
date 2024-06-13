import Terms from "../../Assests/Ourservice/BDE.png";
const Limitation  = () => {
  return (
    <div className="row mx-5">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={Terms} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">Limitation of Liability</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            In no event shall HURRYEP TECHNOLOGIES be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HURRYEP TECHNOLOGIES, even if HURRYEP TECHNOLOGIES or a Hurryep Technologies authorized
             representative has been notified orally or in writing of the possibility of such damage.
            </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  );
};

export default Limitation ;
