import App from "../../Assests/Ourservice/app.png";
import './OurService.css';
const AppDevelopment  = () => {
  return (
    <div className="row  mt-5 mt-md-0 mx-5"  data-aos="fade-up">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">App Development</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Crafting a compelling paragraph for app development requires highlighting the expertise, innovation, and value proposition of your services.
             Here's a sample: Embark on your digital journey with our premier app development services designed to bring your ideas to life. Our experienced team of developers leverages the latest technologies and industry best practices to create customized mobile applications for all platforms.
            </p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
        <img src={App} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
);
};

export default AppDevelopment ;
