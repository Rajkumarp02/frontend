import first from "../../../Assests//Email/first.png";
import "../SEO/SEO.css";

const First = () => {
    return (
        <div className="container py-5" data-aos="fade-up">
            <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
                <div className="col-md-6 col-12 mb-3 mb-md-0">
                    <img src={first} alt="discover our story" className="img-fluid rounded w-75" />
                </div>
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <div className="service-team">
                        <p className="mt-3 text-white mb-2">
                        Email marketing involves a business sending messages 
                        directly to customers' inboxes. It is leveraged to share updates, run promotions,
                        send customized content at the right time to foster richer  relationships, or even increase sales. Targeted emails can be sent across to the customers with an action desired at the end. Get started with email marketing today to connect with your audience.
                          </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;
