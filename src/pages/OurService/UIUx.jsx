import UI from "../../Assests/Ourservice/Ui Ux.png";
import './OurService.css';
const UIUx  = () => {
  return (
    <div className="row mt-md-0 mt-5 mx-5">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">UI/UX Designing</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Transform your digital experience with our expert UI/UX design services. We specialize in creating intuitive and visually stunning interfaces that engage users and elevate your brand. Our team of designers combines
             creativity with strategic thinking to craft user-centric designs that drive conversions and enhance user satisfaction.
             </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
        <img src={UI} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default UIUx ;
