import { TiTick } from "react-icons/ti";
import "../SEO/SEO.css";
import first from "../../../Assests/google/second.jpg";
const Second  = () => {
  return (
    <div className="container mt-5" data-aos="fade-up">
    <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
        <div className="col-md-6 col-12 d-flex mt-md-5 flex-column justify-content-start align-items-start align-items-md-start p-md-5">
            <div className="">
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">We are fully aware of all challenges of reaching your target customer.</span>
            </div>
            <div className="">
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">Data-First Selections: Selections dictated by data.</span>
            </div>
            <div>
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">Eye-catching and informative adverts.</span>
            </div>
            <div>
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">It is always in the state of optimization. The best result is obtained through a continuously running process of optimization.</span>
            </div>
            <div>
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">We constantly keep you posted on what is happening.</span>
            </div>
            <div>
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">We use very personalized methods tailored just for you.</span>
            </div>
            <div>
                <span className="text-white mt-3">Using Google Ads in your familiar way. You can be involved in your 
                company's growth by our help!</span>
            </div>
        </div>
        <div className="col-md-6 col-12 mb-3 mb-md-0">
            <img src={first} alt="discover our story" className="w-100 h-100 rounded mb-4" />
        </div>
    </div>
</div>
  );
};

export default Second ;
