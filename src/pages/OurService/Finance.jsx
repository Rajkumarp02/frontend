import BDE from "../../Assests/Ourservice/BDE.png";
const Finance  = () => {
  return (
    <div className="row mt-5 mt-md-0 mx-5">
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
            </div>
            <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <div>
                    <h6 className="text-service text-md-start">Finance and Auditing</h6>
                </div>
                <div>
                    <p className="mt-md-3 service-team">
                    Streamline your financial operations and ensure regulatory compliance with our comprehensive finance and auditing services. From financial analysis and reporting to internal controls and risk management, 
                    we provide a full spectrum of services to support your financial health and growth.
                     </p>
                </div>
            </div>
        </div>
  );
};

export default Finance ;
