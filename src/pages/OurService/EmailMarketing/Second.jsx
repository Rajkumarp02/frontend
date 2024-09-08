import { TiTick } from "react-icons/ti";
import first from "../../../Assests//Email/second.jpg";
import "../SEO/SEO.css";

const Second = () => {
    return (
        <div className="container mt-5" data-aos="fade-up">
            <div className="row mx-5 d-flex justify-content-center align-items-stretch text-start text-md-start">
                <div className="col-md-6 col-12 d-flex flex-column">
                    <div className="service-team">
                        <p className="text-white">
                            Boost your email campaigns with Hurryep Technologies! Our
                            service makes sure that your mails are effective and reach your
                            audience.
                        </p>
                    </div>
                    <div className="mt-md-5">
                        <h5 className="text-white fw-semibold">Why We're the Best:</h5>
                    </div>
                    <div className="">
                        <TiTick color="#70BF29" size={35} className="mr-2" />
                        <span className="text-white service-team">High Deliverability: 95% of emails go straight to inboxes.</span>
                    </div>
                    <div className="">
                        <TiTick color="#70BF29" size={35} className="mr-2" />
                        <span className="text-white service-team">Great Open Rate: 45% of emails are opened.</span>
                    </div>
                    <div>
                        <TiTick color="#70BF29" size={35} className="mr-2" />
                        <span className="text-white service-team">High Click Rate: 22% of recipients click on links.</span>
                    </div>
                    <div>
                        <TiTick color="#70BF29" size={35} className="mr-2" />
                        <span className="text-white service-team">Low Unsubscribe Rate: Only 5% opt out.</span>
                    </div>
                    <div>
                    <p className="text-white service-team">Choose Hurryep Technologies for robust email marketing that puts life
                    into action.</p>
                </div>
                <div className="mt-4 mb-3 mx-auto mx-md-0">
                    <button className="btn-em px-lg-3 py-2 rounded-3">Get Started Now !</button>
                </div>
                </div>
                <div className="col-md-6 col-12 mb-3 mb-md-0">
                    <img src={first} alt="discover our story" className="img-fluid rounded h-100" />
                </div>
            </div>
        </div>
    );
};

export default Second;
