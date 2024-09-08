import "./SEO.css";
import first from "../../../Assests/Ourservice/seo/seo-1.webp";
import { TiTick } from "react-icons/ti";

const Second = () => {
    return (
        <div className="container mt-5" data-aos="fade-up">
            <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
                <div className="col-md-6 col-12 d-flex flex-column justify-content-start align-items-start align-items-md-start">
                    <div className="service-team">
                        <p className="text-white">
                            We are the greatest SEO business, with a focus on results and
                            care for each of our clients. We will collaborate with the most recent
                            methods and tools to improve your website's ranking on search
                            engines so that more visitors convert into clients. We have an
                            experienced team ready to research your business and create
                            programs that are specific to it.
                        </p>
                    </div>
                    <div className="">
                    <TiTick color="#70BF29" size={35} className="mr-2"/>
                    <span className="text-white">Ethical SEO Methods.</span>
                    </div>
                    <div className="">
                    <TiTick color="#70BF29" size={35} className="mr-2"/>
                    <span className="text-white">Leading On-Page SEO Experts
                    .</span>
                    </div>
                    <div>
                    <TiTick color="#70BF29" size={35} className="mr-2"/>
                    <span className="text-white">Experience in Various Industries.</span>
                    </div>
                    <div>
                    <TiTick color="#70BF29" size={35} className="mr-2"/>
                    <span className="text-white">Specialized Link Building.</span>
                    </div>
                </div>
                <div className="col-md-6 col-12 mb-3 mb-md-0">
                    <img src={first} alt="discover our story" className="img-fluid rounded w-100 h-100" />
                </div>
            </div>
        </div>
    );
};

export default Second;
