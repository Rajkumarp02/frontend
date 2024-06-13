import { IoRocket } from "react-icons/io5";
import "../OurService.css"
const Transform  = () => {
  return (
    <div className="row">
      <div className="col-md-12" style={{background:"rgba(225, 253, 201, 1)"}}>
        <div className="p-md-5 mt-3 mt-md-1 text-center">
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center gap-lg-2">
            <IoRocket size={30} color="#70BF29"/>
            <h5 className="trans-head"
          >Transform Your Online Presence with Web Design Services</h5>
            </div>
          <h5 className="p-md-5 trans-text">Our comprehensive range of internet services will take you into the future of digital interaction. From innovative thinking to technical expertise, we make sure your website stands out in the ever-changing digital world.
           Our personalized web solutions provide a perfect balance of design, performance, and innovation
           </h5>
           <button className="btn p-md-3" style={{
            borderRadius: "10px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white'
           }}>Contact Us</button>
        </div>
        </div>
        </div>
  );
};

export default Transform ;
