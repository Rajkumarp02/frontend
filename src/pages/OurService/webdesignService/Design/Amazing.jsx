import amazing from "../../../../Assests/Webdesign/2-u.jpg"
const Amazing  = () => {
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
            <h6 className="text-service text-md-start text-center">Amazing Web Design</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Our advanced web design services will keep you on top of the design trends. Our designs professionally integrate contemporary design trends with classic enchantment,
             ensuring that your website maintains both current as well as attractive over time.
             </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
        <img src={amazing} alt="discover our story" className="w-100 h-100" />
    </div>
</div>
</div>
  );
};

export default Amazing ;
