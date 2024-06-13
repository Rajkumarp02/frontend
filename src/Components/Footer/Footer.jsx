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
    <div className="container-fluid col-md-12 l fixed">
                 <div className="b-span">
                 <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                 </div>
      <div className="row justify-content-center justify-content-md-between mt-md-0 mt-lg-5">
        <div className="text-center text-md-center text-lg-center mx-lg-0 col-lg-3 l">
        {/* <div className="b-span">
                 <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                 </div> */}
          <img src={logo} alt="logo" className="mx-auto  mb-3" style={{ width: '160px', height: 'auto' }} />
          {/* <h6 className="text-white mx-md-3" style={{ fontWeight: "600", fontSize: "24px", lineHeight: "32px", font: "Poppins" }}><Link to="/aboutus" style={{
              textDecoration:"none",color:"white"
            }}>AboutUs</Link></h6> */}
            <div className="w-100" style={{borderBottom:"1px solid #70BF29"}}></div>
            <div className="d-flex gap-2 justify-content-center mt-3 mb-3">
            <a href="https://www.linkedin.com/company/hurryep-technologies/"><img src={linkedin} alt="" /></a>
            <a href="https://www.facebook.com/HurryepTechnologies"><img src={fb} alt="" /></a> 
            <a href="https://www.instagram.com/hurryep.tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> <img src={insta} alt="" /></a> 
            <a href="https://x.com/Hurryep"><img src={x} alt="" /></a>
            </div>
        </div>
        <div className="col-lg-2 line mt-5 mt-md-3 p-4 mt-lg-0 l">
        <div className="b-span">
                 <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                 </div>
          <div className="mx-2 text-center text-md-center text-lg-start">
          <h6 className="text-foo">Services</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "15px", lineHeight: "30px", font: "Poppins" }}>
          <p><Link className="hover" to="/action1" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}style={{
              textDecoration:"none",color:"white"
            }}>Business Developement</Link>
            </p>
            <p><Link className="hover" to="/action2" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}  style={{
              textDecoration:"none",color:"white"
            }}>Business Collaboration</Link>
            </p>
            <p><Link className="hover" to="/action3" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Web Development</Link>
            </p>
            <p><Link className="hover"to="/action4" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>App Development</Link>
            </p>
            <p><Link className="hover" to="/action5" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Digital Marketing</Link>
            </p>
            <p><Link className="hover" to="/finance" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Finance and Auditing</Link>
            </p>
            <p><Link className="hover" to="/legal" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Legal Assistance</Link>
            </p>
            <p><Link className="hover" to="/Branding and auditing" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Branding and Auditing</Link>
            </p>
            <p><Link className="hover" to="/UI-UX" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>UI UX Design</Link>
            </p>
          </div>
          </div>
        </div>
        <div className="col-lg-2 mt-5 mt-md-3 p-4 mt-lg-0 l">
        <div className="b-span">
                 <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                 </div>
        <div className=" mx-2 text-center text-md-center text-lg-start">
          <h6 className="text-foo">Legal</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "15px", lineHeight: "30px", font: "Poppins" }}>
            <p><Link className="hover" to="/privacy" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Privacy Policy</Link></p>
            <p ><Link className="hover" to="/refund" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Refund Policy</Link></p>
            <p><Link className="hover" to="/terms-and-condition" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Terms and Condition</Link>
            </p>
            <p><Link className="hover" to="/ourService" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Our Service</Link>
            </p>
            <p><Link className="hover" to="/disclaimer" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Disclaimer</Link></p>
          </div>
          </div>
        </div>
        <div className=" col-lg-2 mt-5 mt-md-3 p-4 mt-lg-0 l">
        <div className="b-span">
                 <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                 </div>
        <div className="mx-2 text-center text-md-center text-lg-start">
          <h6 className="text-foo">Learn With Us</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "15px", lineHeight: "30px", font: "Poppins" }}>
            <p><Link className="hover" to="/privacy" style={{
              textDecoration:"none",color:"white"
            }}>UI / UX Designing</Link></p>
            <p><Link className="hover" to="/refund" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>FullStack Development</Link></p>
            <p><Link className="hover" to="/terms-and-condition" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Digital Marketing</Link>
            </p>
            <p><Link className="hover" to="/ourService" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{
              textDecoration:"none",color:"white"
            }}>Wordpress</Link>
            </p>
            <img src={learn} alt="footer-img" className="img-fluid"/> 
          </div>
          </div>
        </div>
        <div className=" col-lg-3 mt-5 mt-md-3 p-4 mt-lg-0 l">
        <div className="b-span">
                 <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                 </div>
        <div className="mx-2 text-center text-md-center text-lg-start">
          <h6 className="text-foo">Contact Us</h6>
          <div className="text-white" style={{ fontWeight: "400", fontSize: "15px", lineHeight: "30px", font: "Poppins" }}>
            <div className="mb-3">
              <FaPhoneAlt color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">6374393936</span>
            </div>
            <div className="mb-3">
              <BiLogoGmail color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">hurryeptech@gmail.com</span>
            </div>
  
            {/* <h6 className="text-foo">For Business:</h6> */}
            <div className="mb-3">
              <BiLogoGmail color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">info@hurryep.com </span>
            </div>
   
            <div>
              <RiMapPin2Fill color="#70BF29" size={15} className="mr-2" />
              <span className="px-1">Head Office - Madurai</span>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center p-md-1 mt-4 text-white">
        <h3 className="text-white f-text">© Hurryep Technologies 2024 | All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
