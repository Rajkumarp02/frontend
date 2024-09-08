import { TiTick } from "react-icons/ti";
import first from "../../../Assests/google/first.jpg";
import "../SEO/SEO.css";

const First  = () => {
  return (
    <div className="container py-5" data-aos="fade-up">
    <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
        <div className="col-md-6 col-12 mb-3 mb-md-0">
            <img src={first} alt="discover our story" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 col-12 p-mt-5 p-md-5 d-flex flex-column justify-content-start align-items-start align-items-md-start">
                    <div className="service-team">
                        <p className="text-white">
                        Is your business ready to shine? Let the power of Google Ads be unleashed! Google Ads Service can bring more traffic, boost visibility, and even give a strong return on investment, outperforming almost any other way. More than 3.5 
                        billion searches are conducted on Google every day; reach out to clients looking for your products or services.
                        </p>
                    </div>
                    <div className="">
                    <TiTick color="#70BF29" size={35} className="mr-2"/>
                    <span className="text-white">Appear at the top of people's search results.</span>
                    </div>
                    <div className="">
                    <TiTick color="#70BF29" size={35} className="mr-2"/>
                    <span className="text-white">Put your business in front of the right people at the right time with
                    targeting.</span>
                    </div>
                    <div>
                    <TiTick color="#70BF29" size={35} className="mr-2"/>
                    <span className="text-white">Gain some insight with Google Analytics regarding how well your
                    ads are doing.</span>
                    </div>
                    <div>
                    <TiTick color="#70BF29" size={35} className="mr-2"/>
                    <span className="text-white">Pay per click on your Ads so you can be sure that you are extracting maximum value out of your budget.</span>
                    </div>
                </div>
    </div>
</div>
  );
};

export default First ;
