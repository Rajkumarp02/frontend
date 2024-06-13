import Transform from "./Transform";
import "../OurService.css"
import MadeMdu from "./MadeMdu";
import ProTeam from "./ProTeam";
import Passionate from "./Passionate";
import Impact from "./Impact";
import Communication from "./Communication";
import SearchOptimization from "./SearchOptimization";
import SearchMarketing from "./SearchMarketing";
import Social from "./Social";
import Email from "./Email";
import InternetMarketing from "./InternetMarketing";
import FAQ from "./FAQ";
import Contact from "../../../Components/Contact/Contact";
import Footer from "../../../Components/Footer/Footer"
import "./Digi.css"
import { Link } from "react-router-dom";

const Digital = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 bg-dg img-fluid w-100 h-100 text-center text-md-start mx-5 mt-5 mt-md-5 p-5">
                    <div className="p-md-5 mx-md-5 mt-5 mt-md-5">
                        <h1 className="text-digi mt-5 mt-md-2 mt-lg-5 text-center mx-auto mx-md-0 text-md-start text-dark">
                            Ready to Dominate Online? Let's Boost Your Business Visibility! Want to Know How?
                        </h1>
                        <div className="mt-3">
                            <Link to="/aboutus">
                                <button className="btn text-center text-md-start text-white" style={{ borderRadius: "50px", border: "2px solid #70BF29", fontSize: "18px", fontWeight: "600", background: "rgba(112, 191, 41, 1)" }}>Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Transform />
            </div>
            <div className="mt-3 col-md-12 text-center trans-head">
                <div className="card">
                    <h5 className="text-head p-md-3 mb-3">Why Should You Choose Our Internet Marketing Services?</h5>
                    <span class="top"></span>
                    <span class="right"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                </div>
            </div>
            <div className="mt-5 mt-md-3">
                <MadeMdu />
            </div>
            <div className="mt-5">
                <ProTeam />
            </div>
            <div className="mt-5">
                <Passionate />
            </div>
            <div className="mt-5">
                <Impact />
            </div>
            <div className="mt-5">
                <Communication />
            </div>
            <div className="mt-5">
                <SearchOptimization />
            </div>
            <div className="mt-5">
                <SearchMarketing />
            </div>
            <div className="mt-5">
                <Social />
            </div>
            <div className="mt-5">
                <Email />
            </div>
            <div className="mt-5">
                <InternetMarketing />
            </div>
            <div className="mt-5">
                <FAQ />
            </div>
            <div className="mt-5">
                <Contact />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    );
};

export default Digital;
