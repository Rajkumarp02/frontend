import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import "../OurService.css"

const FAQ = () => {
    const [isOpen, setOpen] = useState(false);
    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
    const [isOpen3, setOpen3] = useState(false);
    const [isOpen4, setOpen4] = useState(false);

    const handleChange = () => {
        setOpen(true);
    }
    const handleOut = () => {
        setOpen(false);
    }
    const handleChange1 = () => {
        setOpen1(true);
    }
    const handleOut1 = () => {
        setOpen1(false);
    }
    const handleChange2 = () => {
        setOpen2(true);
    }
    const handleOut2 = () => {
        setOpen2(false);
    }
    const handleChange3 = () => {
        setOpen3(true);
    }
    const handleOut3 = () => {
        setOpen3(false);
    }
    const handleChange4 = () => {
        setOpen4(true);
    }
    const handleOut4 = () => {
        setOpen4(false);
    }
  


    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center mb-4">
                    <h6 className="text-service text-center">Common Queries About Email Marketing Services</h6>
                </div>
                <div className="col-12">
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text"> How can email marketing benefit my business?  </h3>
                            <button className="btn" onClick={isOpen ? handleOut : handleChange}>
                                {isOpen ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                It can assist with wider reach, lead nurturing, driving website traffic, increasing sales, and ensuring customer loyalty.
                                 </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What features do you offer?</h3>
                            <button className="btn" onClick={isOpen1 ? handleOut1 : handleChange1}>
                                {isOpen1 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen1 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Customizable templates, list segmentation, automation, A /B Testing, Analytics, Integrations, Responsive Support.
                                  </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What analytics do you provide? </h3>
                            <button className="btn" onClick={isOpen2 ? handleOut2 : handleChange2}>
                                {isOpen2 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen2 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Monitor the open rates, KPI of click-through rates, conversion rate, and subscribers responsiveness.
                                    </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text"> How secure is your platform?</h3>
                            <button className="btn" onClick={isOpen3 ? handleOut3 : handleChange3}>
                                {isOpen3 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen3 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Our infrastructure has solid safeguards: anti-viral software,policies of encryptions, permissions and audited checks.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text"> Who uses your service?</h3>
                            <button className="btn" onClick={isOpen4 ? handleOut4 : handleChange4}>
                                {isOpen4 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen4 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Our users very broadly span from e-Commerce, SaaS, retail, and B2B to non-profit organizations in the domain of education.
                                </h5>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;