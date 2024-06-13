import Im from "../../Assests/Ourservice/e-u.jpg"
const Payment  = () => {
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
            <h6 className="text-service text-md-start text-center">Payment Policy</h6>
        </div>
        <div>
            <p className="mt-md-3 service-team">
            Payment for services provided by Hurryep Technologies must be made in accordance with the terms agreed upon between Hurryep Technologies and the customer. Payment terms, including but not limited to pricing, invoicing, and payment methods, shall be communicated to the customer prior to the commencement of services. Failure to adhere to the payment terms may result in the suspension or termination of services.
             </p>
        </div>
    </div>
</div>
</div>
  );
};

export default Payment ;
