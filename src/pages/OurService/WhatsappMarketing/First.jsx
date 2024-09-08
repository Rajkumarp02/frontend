import first from "../../../Assests/wp/first.png";
import "../SEO/SEO.css";

const First = () => {
    return (
        <div className="container py-5" data-aos="fade-up">
            <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
                <div className="col-md-6 col-12 mb-3 mb-md-0">
                    <img src={first} alt="discover our story" className="img-fluid rounded w-100 h-100" />
                </div>
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <div className="service-team">
                        <p className="mt-3 text-white mb-2">
                        WhatsApp Marketing means reaching your clients directly through the popular WhatsApp messaging app. Through it, you'll be able to further reach out in order to pass on information, messages, and offers; interact with them much better; get them excited; increase sales; and as basic as it gets, provide the most direct way of targeting people on an application they're always on.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;
