import Im from "../../Assests/Ourservice/e-u.jpg"
const Cancel  = () => {
  return (
    <div className="container-fluid" style={{
      border: "1px solid",
      borderRadius: "0px",
      background: "rgba(112, 191, 41, 0.1)",
      padding: 0
  }}>
    <div className="row no-gutters h-100">
    <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
        <img src={Im} alt="discover our story" className="w-100 h-100" />
    </div>
    <div className="col-md-12 col-lg-6 mt-o mt-md-5 d-flex flex-column justify-content-center p-4 p-md-5 h-100">
        <div>
            <h6 className="text-service text-md-start text-center">Cancellation & Refund Policies</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Hurryep Technologies operates on a strict no-refund and no-cancellation policy. Once a customer has made a purchase or availed of our services, they are not entitled to refunds or cancellations. This policy is applicable to all our services, including web development, app development, digital marketing, business development collaborations, online and offline classes, workshops, and webinars.
             We advise our customers to thoroughly evaluate their purchases before initiating any transactions.
             </p>
        </div>
    </div>
</div>
</div>
  );
};

export default Cancel ;
