import first from "../../../Assests/wp/second.png";
import "../SEO/SEO.css";
const Second  = () => {
  return (
    <div className="container mt-5" data-aos="fade-up">
            <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
            <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <div className="service-team">
                        <p className="mt-3 text-white mb-2">
                        WhatsApp is not only an application but it is a social networking site that has become a part of global people. Offering a unique strength of having active connections with more than two billion people in 180 different countries, WhatsApp is unequivocally unique in terms of access and interaction. Although it may be a valid product for common use, what makes it unique for businesses to patronize?
                        </p>
                    </div>
                    </div>
                <div className="col-md-6 col-12 mb-3 mb-md-0">
                    <img src={first} alt="discover our story" className="img-fluid rounded w-100 h-100" />
                </div>
            </div>
        </div>
  );
};

export default Second ;
