import GD from "../../Assests/Ourservice/GD.png";
import './OurService.css';
const GraphicDesign  = () => {
  return (
    <div className="row mt-5 mt-md-0 mx-5">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img src={GD} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Graphic Designing</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Revitalize your brand image with our top-notch graphic design services. We specialize in creating visually stunning and impactful designs that captivate audiences and leave a lasting impression. From logos and branding materials to marketing collateral and digital assets, our team of skilled designers will work closely with you to bring your vision to life.With a keen eye for detail
             and a passion for creativity, we'll craft designs that reflect your brand identity and resonate with your target audience.
              </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  );
};

export default GraphicDesign ;
