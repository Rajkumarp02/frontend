// import { FaPhoneAlt } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
// import { RiMapPin2Fill } from "react-icons/ri";
import "../../pages/Home/Home.css";
import "../Contact/Contact.css"
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "2b28fc16-8cfa-4481-b241-905b4a9eb99c");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting the form", error);
            setResult("An error occurred. Please try again.");
        }
    };
    return (
        <div className="container-fluid mt-5">
              <div className="text-center mb-4 mt-5">
                <h5 className="fw-semibold contact-text text-white mt-5">CONTACT US</h5>
               </div>
            <div className="row contact p-md-5 rounded">
                <form className="col-lg-5 col-12 p-md-3 mx-lg-5 box-bg rounded" onSubmit={onSubmit}>
                    <div className="mt-3 mt-md-0">
                      <h3 className="text-center text-white fw-medium" style={{fontSize:"32.02px",fontFamily:"Poppins"}}>Get In Touch</h3>
                    </div>
                    <div className="p-2">
                        <input type="text" name="name" className="form-control p-3 rounded-2 mt-1" placeholder="Your Name" style={{
                            background: "rgba(234, 234, 234, 1)"
                        }} required />
                    </div>
                    <div className="p-2">
                        <input type="email" name="name" className="form-control p-3 rounded-2 mt-1" placeholder="Mail ID" style={{
                            background: "rgba(234, 234, 234, 1)"
                        }} required />
                    </div>
                    <div className="p-2">
                       <input type="tel" name="phone" className="form-control p-3 rounded-2 mt-1" placeholder="Your Number" style={{
                            background: "rgba(234, 234, 234, 1)"
                        }} required />
                    </div>
                    <div className="p-2">
                        <textarea name="message" className="form-control text-area rounded-2 mt-1" rows="4" placeholder="Your Message" style={{ backgroundColor: "rgba(234, 234, 234, 1)" }} required></textarea>
                    </div>
                    <div className="text-center p-2 mt-2">
                        <button type="submit" className="btn px-4 py-2 rounded-6 fw-semibold" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", fontSize: "24.2px", fontWeight: "600", color: 'white', padding: "4px 24px",lineHeight:"32px",letterSpacing:"2px" }}>Submit</button>
                    </div>
                    <div className="text-center mt-3">
                        {result ? <p className="fs-4 text-center" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#70BF29" }}>{result}</p> : "" } 
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact;