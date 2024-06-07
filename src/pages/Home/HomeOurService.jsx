import "./Home.css";
import BDE from "../../Assests/Home/BDE-modified.png";
import BC from "../../Assests/Home/BC-modified.png";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const HomeOurService = () => {
    const nav = useNavigate();

    const handle1 = () => {
        nav("/action1")
    }
    
    const handle2 = () => {
        nav("/action2")
    }
    return (
        <div className="container-fluid">
            <div className="p-md-5 text-center">
                <h5 className="fw-semibold text-white" style={{
                    fontWeight: "500",
                    fontSize: "54px",
                    lineHeight: "32px",
                }}>OUR SERVICES</h5>
                <h5 className="text-service mt-5">Explore our tailored services for an elevated experience.</h5>
            </div>
            <ServiceCard/>
            {/* <div className="p-md-5 container-fluid">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="row mb-4">
                            <div className="col text-center">
                                <button className="btn btn-dark p-2" style={{cursor:"none"}}>Business Development</button>
                            </div>
                        </div>
                        <div className="service p-4 bg-dark text-white rounded-2 d-flex flex-column align-items-center">
                            <img src={BDE} alt="BDE" className="w-md-25 w-50 h-auto rounded-circle" />
                            <h5 className="mt-3" style={{ fontWeight: "500", fontSize: "18px", lineHeight: "32px" }}>Business Development</h5>
                            <p className="mt-3 text-start" style={{ fontWeight: "700", fontSize: "16px", lineHeight: "25px" }}>
                                Accelerate your business growth with our strategic business development services. We provide comprehensive analysis, market research, and strategic planning to identify new opportunities, expand your customer base, and maximize revenue streams.
                                Our experienced team works closely with you to develop sustainable growth strategies aligned with your business objectives.
                            </p>
                            <button className="btn text-white mt-3 bg-dark" onClick={handle1} style={{ borderRadius: "50px", background: "#70BF29", border: "2px solid #70BF29", fontSize: "16px", fontWeight: "700" }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row mb-4">
                            <div className="col text-center">
                                <button className="btn btn-dark p-2" style={{cursor:"none"}}>Business Collaboration</button>
                            </div>
                        </div>
                        <div className="service p-4 bg-dark text-white rounded-2 d-flex flex-column align-items-center">
                            <img src={BC} alt="BC" className="w-md-25 w-50 h-auto rounded-circle" />
                            <h5 className="mt-3" style={{ fontWeight: "500", fontSize: "18px", lineHeight: "32px" }}>Business Collaboration</h5>
                            <p className="mt-3 text-start" style={{ fontWeight: "700", fontSize: "16px", lineHeight: "32px" }}>
                                Forge valuable partnerships and collaborations to drive mutual success with our business collaborator services. We facilitate connections with like-minded businesses, startups, and industry experts to explore synergies, share resources, and unlock new opportunities for innovation and growth.
                            </p>
                            <button className="btn text-white mt-3 mt-md-4 mt-lg-3 d-block bg-dark" onClick={handle2} style={{ borderRadius: "50px", background: "#70BF29", border: "2px solid #70BF29", fontSize: "16px", fontWeight: "700" }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div> 
                </div>
                */}
            </div>
    );
};

export default HomeOurService;
