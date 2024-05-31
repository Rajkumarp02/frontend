import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RiMapPin2Fill } from "react-icons/ri";
import "../../pages/Home/Home.css";

const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="text-center mb-4">
                <h5 className="text-muted" style={{ fontWeight: "500", fontSize: "18px", lineHeight: "32px", font: "Poppins" }}>CONTACT US</h5>
                <h5 className="mt-2" style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32px", font: "Poppins", color: "#70BF29" }}>Get In Touch</h5>
            </div>
            <div className="row p-md-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#70BF29" }}>Send us a message</h5>
                    <div className="d-flex mt-3 align-items-start">
                        <RiMapPin2Fill size={30} color="#70BF29" className="me-3" />
                        <p className="mb-0" style={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px", color: "#000000" }}>
                            No: 2/3 Hurryep Technologies, Uchaparambumedu Rd,<br />
                            Iyer Bungalow, Madurai, Tamil Nadu 625017
                        </p>
                    </div>
                    <div className="d-flex mt-4 align-items-center">
                        <BiLogoGmail size={30} color="#70BF29" className="me-3" />
                        <p className="mb-0" style={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px", color: "#000000" }}>hurryeptech@gmail.com</p>
                    </div>
                    <div className="d-flex mt-4 align-items-center">
                        <FaPhoneAlt size={30} color="#70BF29" className="me-3" />
                        <p className="mb-0" style={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px", color: "#000000" }}>
                            +91 8675651401 | +91 6374393936
                        </p>
                    </div>
                    <p className="mt-4" style={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px", color: "#000000" }}>
                        We value your feedback and inquiries. Please feel free to reach out to us using the form below. Whether you have questions about our services, 
                        need assistance, or want to share your thoughts, we're here to help. Our team will get back to you as soon as possible.
                    </p>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3">
                        <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#70BF29" }}>Your Name</h5>
                        <input type="text" className="form-control p-2 rounded-2 mt-1" placeholder="Enter Your Name" style={{
                            background:"#E1FDC9"
                        }}/>
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#70BF29" }}>Phone Number</h5>
                        <input type="tel" className="form-control p-2 rounded-2 mt-1" placeholder="Enter Your Number" style={{
                                 background:"#E1FDC9"
                        }} />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#70BF29" }}>Write your message here</h5>
                        <textarea className="form-control text-area rounded-2 mt-1" rows="4" placeholder="Enter Your Message" style={{ backgroundColor: "#E1FDC9", color: "#999999" }}></textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", fontSize: "18px", fontWeight: "600", color: 'white', padding: "4px 24px" }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
