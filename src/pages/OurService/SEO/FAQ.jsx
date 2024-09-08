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
                    <h6 className="text-service text-center">FAQ</h6>
                </div>
                <div className="col-12">
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">In how many days will one rank in the first page of a search engine like Google?</h3>
                            <button className="btn" onClick={isOpen ? handleOut : handleChange}>
                                {isOpen ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Ranking on Google's first page depends. If homework is less competitive then one should rank within weeks otherwise for more competitive keywords it will take months or more.
                                   </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What are the most important factors for SEO success?</h3>
                            <button className="btn" onClick={isOpen1 ? handleOut1 : handleChange1}>
                                {isOpen1 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen1 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                The most important factors involved in any successful SEO are good content, proper keyword analysis, and quality backlinks.
                                  </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">Will SEO Increase Sales?</h3>
                            <button className="btn" onClick={isOpen2 ? handleOut2 : handleChange2}>
                                {isOpen2 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen2 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Yes, you may see a gradual increase of sales and consumer visits after achieving ranks. To increase sales, we recommend transactional keywords.
                                  </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">Is SEO a one-time effort or a continuous process?</h3>
                            <button className="btn" onClick={isOpen3 ? handleOut3 : handleChange3}>
                                {isOpen3 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen3 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Understanding a forever effort : Continuous optimization and updating on a regular basis will be needed for the maintenance and improvement of rankings of a site in search engines
                                  </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How can I improve my website's visibility in a local search result?</h3>
                            <button className="btn" onClick={isOpen4 ? handleOut4 : handleChange4}>
                                {isOpen4 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen4 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Learn how to optimize your website for local SEO and reach your direct customers in your location.
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
