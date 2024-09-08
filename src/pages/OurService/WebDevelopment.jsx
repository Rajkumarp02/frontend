import web from "../../Assests/Ourservice/web.png"
import './OurService.css';
const WebDevelopment  = () => {
  return (
    <div className="row p-md-5 mt-5 mt-md-0  mx-5" data-aos="fade-up">
    <div className="col-md-12 col-lg-6 mb-4 d-flex justify-content-center align-items-center">
        <img src={web} alt="discover our story" className="img-fluid rounded-2" />
    </div>
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Web Development</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Elevate your online presence with our comprehensive web development solutions tailored to your business needs. Our team of skilled developers combines creativity with technical expertise to deliver stunning, user-friendly websites that captivate audiences and drive results. From intuitive UI/UX design 
            to robust backend development, we handle every aspect of the development process with precision and attention to detail.</p>
        </div>
        {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
        <button className="btn text-center text-md-start" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Discover More</button>
        </div> */}
    </div>
</div>
  );
};

export default WebDevelopment ;
