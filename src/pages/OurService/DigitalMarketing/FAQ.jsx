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
    const [isOpen5, setOpen5] = useState(false);
    const [isOpen6, setOpen6] = useState(false);
    const [isOpen7, setOpen7] = useState(false);
    const [isOpen8, setOpen8] = useState(false);

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
    const handleChange5 = () => {
        setOpen5(true);
    }
    const handleOut5 = () => {
        setOpen5(false);
    }

    const handleChange6 = () => {
        setOpen6(true);
    }
    const handleOut6 = () => {
        setOpen6(false);
    }
    const handleChange7 = () => {
        setOpen7(true);
    }
    const handleOut7 = () => {
        setOpen7(false);
    }
    const handleChange8 = () => {
        setOpen8(true);
    }
    const handleOut8 = () => {
        setOpen8(false);
    }


    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center mb-4">
                    <h6 className="text-service">FAQ</h6>
                </div>
                <div className="col-12">
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How does Hurryep Technologies approach SEO differently for businesses in Madurai?</h3>
                            <button className="btn" onClick={isOpen ? handleOut : handleChange}>
                                {isOpen ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Hurryep Technologies understands the particular market dynamics of Madurai. We personalize our methods to successfully reach the local population, ensuring that your business stands out in the local market.
                                 </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">Can social media marketing help my business reach a local audience in Madurai?</h3>
                            <button className="btn" onClick={isOpen1 ? handleOut1 : handleChange1}>
                                {isOpen1 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen1 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Social media marketing allows you to interact with the audience you are targeting, raise brand exposure, and increase engagement. It's a great method to market your products or services, gain a loyal client base, and increase traffic to your website.
                                 </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What is the difference between SEO and SEM?</h3>
                            <button className="btn" onClick={isOpen2 ? handleOut2 : handleChange2}>
                                {isOpen2 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen2 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                SEO focuses on improving your website for improved organic search ranks,whereas SEM (Search Engine Marketing) employs sponsored techniques such as Google Ads to swiftly appear at the top of search results. Both seek to improve exposure, but use different approaches.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How effective is email marketing?</h3>
                            <button className="btn" onClick={isOpen3 ? handleOut3 : handleChange3}>
                                {isOpen3 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen3 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                One of the most effective tools for nurturing leads and preserving client relationships is email marketing. It increases conversions and maintains audience engagement with frequent updates, sales, and insightful content through targeted campaigns.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What makes Hurryep Technologies different from other digital marketing agencies?</h3>
                            <button className="btn" onClick={isOpen4 ? handleOut4 : handleChange4}>
                                {isOpen4 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen4 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Each client's demands are unique, and Hurryep Technologies adapts its methods accordingly. Our committed staff offers innovative solutions that result in measurable benefits by staying ahead of market trends. Client happiness and sustained success are our top priorities.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">Can you help with local SEO for my business in Madurai?</h3>
                            <button className="btn" onClick={isOpen5 ? handleOut5 : handleChange5}>
                                {isOpen5 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen5 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Yes, we are experts at local SEO and assist Madurai companies become more visible in local search results. 
                                This entails enhancing your local citations, Google My Business page, and targeted keywords to draw in clients in the area.
                              </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How do you measure the success of a digital marketing campaign?</h3>
                            <button className="btn" onClick={isOpen6 ? handleOut6 : handleChange6}>
                                {isOpen6 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen6 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Website traffic, conversion rates, engagement rates, and return on investment are just a few of the measures we use to gauge performance. Transparency is ensured by regular reporting and analysis, which also aids in strategy adjustment for best results.
                            </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">Do you offer customized digital marketing packages?</h3>
                            <button className="btn" onClick={isOpen7 ? handleOut7 : handleChange7}>
                                {isOpen7 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen7 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Of course! Since every business is different, we provide bespoke solutions made to meet your particular requirements and objectives. Whether you want specialized services or all-inclusive digital marketing, we can design astrategy to meet your goals and financial constraints.
                              </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How long does it take to see results from SEO efforts?</h3>
                            <button className="btn" onClick={isOpen8 ? handleOut8 : handleChange8}>
                                {isOpen8 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen8 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Long-term investment required for variable outcomes is SEO. Significant increases in traffic and rankings usually take three to six months to manifest. However, based on how competitive your market is and how well your website is performing right now, this timetable may be shortened or extended.
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
