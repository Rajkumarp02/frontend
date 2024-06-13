import Terms from "../../Assests/Ourservice/BDE.png";
const UserContent  = () => {
  return (
    <div className="row  mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-center text-md-start">User Content</h6>
        </div>
        <div>
            <p className="mt-3 service-team">
            In these Terms & Conditions, “Your Content” shall mean any audio, video, text, images, or other material you choose to display on HURRYEP TECHNOLOGIES. By displaying Your Content, you grant HURRYEP TECHNOLOGIES a non-exclusive, worldwide irrevocable, 
            sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
            </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-md-5 mt-lg-0">
        <img src={Terms} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default UserContent ;
