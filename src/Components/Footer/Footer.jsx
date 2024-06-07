import logo from "../../Assests/Navbar/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RiMapPin2Fill } from "react-icons/ri"
import { Link } from "react-router-dom";
import "./Footer.css"
import linkedin from "../../Assests/footer/linkedin.png";
import fb from "../../Assests/footer/fb.png";
import insta from "../../Assests/footer/insta.png";
import x from "../../Assests/footer/x.png";
import learn from "../../Assests/footer/pic.png"

const Footer = () => {
  return (
    <div className="container-fluid col-md-12 py-5 mb-2" style={{
      border:"1px solid #70BF29"
    }}>
      <div className="row justify-content-center justify-content-md-between mt-md-5 line" style={{borderBottom:"1px solid #70BF29"}}>
        <div className="text-center text-md-start text-lg-center  mx-lg-0 col-md-6 col-lg-3 line">
          <img src={logo} alt="logo" className="mx-auto  mb-3" style={{ width: '160px', height: 'auto' }} />
          {/* <h6 className="text-white mx-md-3" style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32px", font: "Poppins" }}><Link to="/aboutus" style={{
              textDecoration:"none",color:"white"
            }}>AboutUs</Link></h6> */}
            <div className="w-100" style={{borderBottom:"1px solid #70BF29"}}></div>
            <div className="d-flex gap-2 justify-content-center mt-3 mb-3">
             <img src={linkedin} alt="" />
             <img src={fb} alt="" />
             <img src={insta} alt="" />
             <img src={x} alt="" />
            </div>
        </div>
        <div className="col-md-6 col-lg-2 line mt-5 mt-md-0">
          <div className="mx-2 text-center text-md-start">
          <h6 className="text-head">Services</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "15px", lineHeight: "32px", font: "Poppins" }}>
          <p><Link to="/action1" style={{
              textDecoration:"none",color:"white"
            }}>Business Developement</Link>
            </p>
            <p><Link to="/action2" style={{
              textDecoration:"none",color:"white"
            }}>Business Collaboration</Link>
            </p>
            <p><Link to="/finance" style={{
              textDecoration:"none",color:"white"
            }}>Web Development</Link>
            </p>
            <p><Link to="/finance" style={{
              textDecoration:"none",color:"white"
            }}>App Development</Link>
            </p>
            <p><Link to="/finance" style={{
              textDecoration:"none",color:"white"
            }}>Digital Marketing</Link>
            </p>
            <p><Link to="/finance" style={{
              textDecoration:"none",color:"white"
            }}>Finance and Auditing</Link>
            </p>
            <p><Link to="/legal" style={{
              textDecoration:"none",color:"white"
            }}>Legal Assistance</Link>
            </p>
            <p><Link to="/Branding and auditing" style={{
              textDecoration:"none",color:"white"
            }}>Branding and Auditing</Link>
            </p>
            <p><Link to="/UI-UX" style={{
              textDecoration:"none",color:"white"
            }}>UI UX Design</Link>
            </p>
          </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-2 mt-5 mt-md-0 line">
        <div className=" mx-2 text-center text-md-start">
          <h6 className="text-head">Legal</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "15px", lineHeight: "32px", font: "Poppins" }}>
            <p><Link to="/privacy" style={{
              textDecoration:"none",color:"white"
            }}>Privacy Policy</Link></p>
            <p><Link to="/refund" style={{
              textDecoration:"none",color:"white"
            }}>Refund Policy</Link></p>
            <p><Link to="/terms-and-condition" style={{
              textDecoration:"none",color:"white"
            }}>Terms and Condition</Link>
            </p>
            <p><Link to="/ourService" style={{
              textDecoration:"none",color:"white"
            }}>Our Service</Link>
            </p>
            <p><Link to="/disclaimer" style={{
              textDecoration:"none",color:"white"
            }}>Disclaimer</Link></p>
          </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-2 mt-5 mt-md-0 line">
        <div className="mx-2 text-center text-md-start">
          <h6 className="text-head">Learn With Us</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "15px", lineHeight: "32px", font: "Poppins" }}>
            <p><Link to="/privacy" style={{
              textDecoration:"none",color:"white"
            }}>UI / UX Designing</Link></p>
            <p><Link to="/refund" style={{
              textDecoration:"none",color:"white"
            }}>FullStack Development</Link></p>
            <p><Link to="/terms-and-condition" style={{
              textDecoration:"none",color:"white"
            }}>Digital Marketing</Link>
            </p>
            <p><Link to="/ourService" style={{
              textDecoration:"none",color:"white"
            }}>Wordpress</Link>
            </p>
            <img src={learn} alt="footer-img" className="img-fluid"/> 
          </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mt-5 mt-md-0">
        <div className="mx-2 text-center text-md-start">
          <h6 className="text-head">Contact Us</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "15px", lineHeight: "32px", font: "Poppins" }}>
            <div className="mb-3">
              <FaPhoneAlt color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">6374393936</span>
            </div>
            <div className="mb-3">
              <BiLogoGmail color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">hurryeptech@gmail.com</span>
            </div>
            <div>
              <RiMapPin2Fill color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">Iyer Bungalow, Madurai</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
