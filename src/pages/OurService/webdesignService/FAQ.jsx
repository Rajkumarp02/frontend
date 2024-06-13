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

 
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center mb-4">
                    <h6 className="text-service">FAQ</h6>
                </div>
                <div className="col-12">
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What makes your website designing process different from other companies in Madurai?</h3>
                            <button className="btn" onClick={isOpen ? handleOut : handleChange}>
                                {isOpen ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                    In order to create appealing online presences that are suited to the particular essence of each business,
                                    our website designing method in Madurai blends artistic creativity, user-centric design, and state-of-the-art technology.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How do you ensure that the websites you create are mobile responsive and optimized for search engines?</h3>
                            <button className="btn" onClick={isOpen1 ? handleOut1 : handleChange1}>
                                {isOpen1 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen1 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                    For the websites we develop in Madurai, we promise search engine optimization and mobile friendliness. To guarantee excellent user experiences and great visibility in search engine rankings,
                                    our knowledgeable team uses responsive design strategies and follows best practices.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">Can you provide examples of websites you have designed and developed for businesses in Madurai?</h3>
                            <button className="btn" onClick={isOpen2 ? handleOut2 : handleChange2}>
                                {isOpen2 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen2 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                    View our portfolio of websites we've created and built for Madurai-based companies. Our work showcases our dedication to innovation and excellence in digital design,
                                    ranging from sophisticated e-commerce systems to captivating corporate websites.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What steps do you take to ensure the security of the websites you build?</h3>
                            <button className="btn" onClick={isOpen3 ? handleOut3 : handleChange3}>
                                {isOpen3 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen3 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                    Website security is very important to us in Madurai, and we use a multi-layered strategy to guard against any attacks. This includes applying SSL certificates, employing safe code practices,
                                    conducting frequent security audits, and using trustworthy hosting providers, among other things.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">Do you offer website maintenance services after the initial development is complete?</h3>
                            <button className="btn" onClick={isOpen4 ? handleOut4 : handleChange4}>
                                {isOpen4 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen4 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                    Yes, we provide complete post-development website maintenance services in Madurai. To make sure your website stays safe, up to date, and functioning, our services include frequent updates,
                                    security checks, content changes, performance improvements, and continuous support.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How do you handle website content creation and do you offer content management services?</h3>
                            <button className="btn" onClick={isOpen5 ? handleOut5 : handleChange5}>
                                {isOpen5 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen5 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                          Our specialty is creating captivating online content that speaks to the audience and voice of your company.
                           You can concentrate on your company while we take care of your online appearance thanks to our content management services, which guarantee your site remains current and relevant.
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What is your process for incorporating e-commerce functionality into websites for businesses in Madurai?</h3>
                            <button className="btn" onClick={isOpen6 ? handleOut6 : handleChange6}>
                                {isOpen6 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen6 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                            We create seamless ecommerce experiences 
                                by fusing local charm with global reach while tailoring digital success in Madurai. We create websites that turn businesses into virtual empires, from secure transactions to user-centric design.
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
