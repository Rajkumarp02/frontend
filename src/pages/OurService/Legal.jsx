import BDE from "../../Assests/Ourservice/IM.png";
const Legal  = () => {
  return (
    <div className="row mt-5 mt-md-0 mx-5" data-aos="fade-up">
    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
        <div>
            <h6 className="text-service text-md-start">Legal Assistance</h6>
        </div>
        <div> 
            <p className="mt-md-3 service-team">
            Navigate the legal landscape with confidence with our expert legal assistance services. Our team of seasoned attorneys provides comprehensive guidance and support to businesses of all sizes, ensuring compliance with laws and regulations while mitigating risks. From contract review and drafting to dispute resolution and compliance audits, 
            we offer a full range of legal services tailored to your specific needs.
             </p>
        </div>
    </div>
    <div className="col-md-12 col-lg-6  d-flex justify-content-center align-items-center mt-5 mt-md-0">
        <img src={BDE} alt="discover our story" className="img-fluid rounded-2" />
    </div>
</div>
  );
};

export default Legal ;
