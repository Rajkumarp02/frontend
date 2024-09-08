import first from "../../../Assests/sm/first.jpg";
import "../SEO/SEO.css";
const First  = () => {
  return (
    <div className="container py-5" data-aos="fade-up">
    <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
        <div className="col-md-6 col-12 mb-3 mb-md-0">
            <img src={first} alt="discover our story" className="img-fluid rounded w-100 h-100" />
        </div>
        <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start">
            <div className="service-team">
                <p className="mt-3 text-white mb-2">
                Social media marketing services are therefore very important to
a business since they help connect to several people across the 
globe. Social media platforms, such as Facebook, Instagram, Twitter, 
and LinkedIn among others have billions of users. For example, Facebook has over 2.8 billion every month! In case you get to them, you will be capable of showing them your business, always 
communicate with them both ways, create interest, or otherwise sell. It's a good way of staying ahead in the digital world and reaching customers everywhere.
                </p>
            </div>
        </div>
    </div>
</div>
  );
};

export default First ;
