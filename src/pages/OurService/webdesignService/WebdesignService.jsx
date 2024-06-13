import { useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import "../OurService.css";
import Amazing from "./Design/Amazing";
import CMS from "./Design/CMS";
import MobileResponsive from "./Design/MobileResponsive";
import Navigation from "./Design/Navigation";
import Optimized from "./Design/Optimized";
import OutStanding from "./Design/OutStanding";
import Swift from "./Design/Swift";
import Unique from "./Design/Unique";
import Ux from "./Design/Ux";
import FAQ from "./FAQ";
import Tailored from "./Tailored";
import Transform from "./Transform";
import Contact from "../../../Components/Contact/Contact.jsx";
import "./Web.css"
import "../../OurService/OurService.css"
const WebdesignService = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    setResult("Sending....");
    const formData = new FormData(form);
    formData.append("access_key", "2b28fc16-8cfa-4481-b241-905b4a9eb99c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult(
        "There was an error submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 bg-web img-fluid w-100 h-100 text-center text-md-start mx-5 mt-5 mt-md-0 p-1">
          <div className="p-md-5 mx-md-5 mt-5 mt-md-4">
            <h1 className="text-our mt-5 mt-md-4 text-center mx-auto mx-md-0 text-md-start text-dark fw-bold">
              Elevate Your Online Presence
            </h1>
            <div
              className="mb-2 mt-md-0 mt-mb-0"
              style={{ color: "rgba(112, 191, 41, 1)" }}
            >
              <h4 className="fw-semibold text-ours text-center text-md-start fw-bold">
                Hurryep Technologies Website Design and Development Service in
                Madurai. We welcome you to Hurryep Technologies, the blend of
                simplicity and style in website design and development.
              </h4>
            </div>
            <div
              className="rounded-4 box-shadow p-md-4 text-center c-box"
              style={{
                width: "100%",
                maxWidth: "400px",
                background: "rgba(209, 253, 170, 1)",
              }}
            >
              <h6 className="text-box">Get In Touch</h6>
              <form onSubmit={onSubmit}>
                <div className="mb-2">
                  <input
                    name="name"
                    type="text"
                    placeholder=" Name"
                    className="form-control p-2 px-2 form rounded-2 mt-1 fw-semibold lead custom-placeholder"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="email"
                    type="email"
                    placeholder=" Email"
                    className="form-control p-2 form rounded-2 mt-1 fw-semibold lead custom-placeholder"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="number"
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="form-control p-2 form rounded-2 mt-1 fw-semibold lead custom-placeholder"
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    name="message"
                    placeholder=" Message"
                    className="form-control form text-area rounded-2 mt-1 fw-semibold lead custom-placeholder"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="text-center mb-2">
                  <button
                    className="btn d-block w-100"
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#70BF29",
                      borderColor: "#70BF29",
                      border: "2px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "white",
                      padding: "4px 24px",
                    }}
                  >
                    Claim Your Free Consultation
                  </button>
                </div>
                {result && <p>{result}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Transform />
      </div>
      <div className="mt-5">
        <Unique />
      </div>
      <div className="mt-5">
        <Amazing />
      </div>
      <div className="mt-5">
        <Navigation />
      </div>
      <div className="mt-5">
        <OutStanding />
      </div>
      <div className="mt-5">
        <Swift />
      </div>
      <div className="mt-5">
        <Optimized />
      </div>
      <div className="mt-5">
        <Ux />
      </div>
      <div className="mt-5">
        <MobileResponsive />
      </div>
      <div className="mt-5">
        <CMS />
      </div>
      <div className="mt-5">
        <Tailored />
      </div>
      <div className="mt-5">
        <FAQ />
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

export default WebdesignService;