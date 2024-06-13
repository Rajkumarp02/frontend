import b from "../../../Assests/Webdesign/b.png";
import e from "../../../Assests/Webdesign/e.png";
import p from "../../../Assests/Webdesign/p.png";
import edu from "../../../Assests/Webdesign/edu.png";
import web from "../../../Assests/Webdesign/web.png";
const Tailored = () => {
  return (
    <div className="container-fluid">
      <div className="row  p-md-5 text-center"style={{background:"rgba(225, 253, 201, 1)"}}>
        <div className="col-12 mt-3 mt-md-1">
          <h5 className="tailored-title">Tailored Web Design Expertise Crafting Your Unique Online Experience</h5>
        </div>
        <div className="row justify-content-center mt-5 p-md-5">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="service-card text-center d-flex flex-column align-items-center p-md-3 h-100">
              <img src={b} alt="Business Websites" className="img-fluid mb-3" />
              <h6 className="service-title" style={{ color: "#70BF29" }}>Business Websites</h6>
              <p className="card-para mt-3">Your online presence, presenting the world with the core values, goods, and services of your brand.</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="service-card text-center d-flex flex-column align-items-center p-3 h-100">
              <img src={e} alt="E-commerce Websites" className="img-fluid mb-3" />
              <h6 className="service-title" style={{ color: "#70BF29" }}>E-commerce Websites</h6>
              <p className="card-para mt-3">Online marketplaces that put shopping at your fingertips with ease and choice.</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="service-card text-center d-flex flex-column align-items-center p-3 h-100">
              <img src={p} alt="Portfolio Websites" className="img-fluid mb-3" />
              <h6 className="service-title" style={{ color: "#70BF29" }}>Portfolio Websites</h6>
              <p className="card-para mt-3">Talent portfolios with accomplishments and abilities displayed for prospective employers.</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="service-card text-center d-flex flex-column align-items-center p-3 h-100">
              <img src={edu} alt="Educational Websites" className="img-fluid mb-3" />
              <h6 className="service-title" style={{ color: "#70BF29" }}>Educational Websites</h6>
              <p className="card-para mt-3">Resource centers provide interactive learning opportunities and educational materials for inquisitive minds.</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="service-card text-center d-flex flex-column align-items-center p-3 h-100">
              <img src={web} alt="Social Media Marketing" className="img-fluid mb-3" />
              <h6 className="service-title" style={{ color: "#70BF29" }}>Social Media Marketing</h6>
              <p className="card-para mt-3">Adaptable digital tools that can be accessed from any location and streamline tasks with a single click.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailored;
