import optimized from "../../../../Assests/Webdesign/6-u.jpg"
const Optimized  = () => {
  return (
    <div className="container-fluid" style={{
        border: "1px solid",
        borderRadius: "0px",
        background: "rgba(112, 191, 41, 0.1)",
        padding: 0
    }}>
      <div className="row no-gutters h-100">
      <div className="col-md-12 col-lg-6 mt-o mt-md-5 d-flex flex-column justify-content-center p-4 p-md-5 h-100">
          <div>
              <h6 className="text-service text-md-start text-center">Optimized for Search Engines</h6>
          </div>
          <div>
              <p className="mt-md-3 service-team">
              Our unique web design solutions will help you realize the full potential of your brand. Our team brings your ideas to life, 
              creating visually appealing designs that reflect your brand's personality and attract your audience.
               </p>
          </div>
      </div>
      <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
          <img src={optimized} alt="discover our story" className="w-100 h-100" />
      </div>
  </div>
  </div>
  );
};

export default Optimized ;
