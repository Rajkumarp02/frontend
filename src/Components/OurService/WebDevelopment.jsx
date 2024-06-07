import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Web from "../../pages/OurService/WebDevelopment"
const WebDevelopment = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 img">
                    <div className="p-5 text-md-start mt-5 text-white" style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "32px",
                        font: "Poppins"
                    }}>
                        <h5>Home / WebDevelopment</h5>
                    </div>
                </div>
            </div>
            <div className="">
            <Web />
           </div>
        
            <div className="mt-5">
                <Contact />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    );
};

export default WebDevelopment;
