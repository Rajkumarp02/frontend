import "../SEO/SEO.css";
import { TiTick } from "react-icons/ti";
import first from "../../../Assests/sm/second.jpg";
const Second  = () => {
  return (
    <div className="container mt-5" data-aos="fade-up">
    <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
        <div className="col-md-6 col-12 d-flex flex-column justify-content-start align-items-start align-items-md-start p-md-5">
            <div className="">
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">Our team knows social media tours well and can make your 
            business shine</span>
            </div>
            <div className="">
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">For you we have personalized our methods we ensure they meet
            your aims</span>
            </div>
            <div>
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">Results-Oriented We are dedicated to obtain you tangible 
            outcomes such as more views or purchases</span>
            </div>
            <div>
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">Our goal is to generate creative ideas that will distinguish your 
            brand online</span>
            </div>
            <div>
            <TiTick color="#70BF29" size={35} className="mr-2"/>
            <span className="text-white">Nice and Honest: Every step of the way, we keep you in the loop
            so there aren't any surprises along the way</span>
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
