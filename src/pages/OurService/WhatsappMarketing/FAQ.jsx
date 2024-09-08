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
                    <h6 className="text-service text-center"> What are some frequently asked questions about WhatsApp Marketing? </h6>
                </div>
                <div className="col-12">
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How Can WhatsApp Marketing Benefit My Business?</h3>
                            <button className="btn" onClick={isOpen ? handleOut : handleChange}>
                                {isOpen ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                It is possible to improve how well you know your business, make more customers relate with your products, increase the number of customers, provide customer service which is tailored for each person as well as maintain long-term connections with clients through marketing with WhatsApp. 
                                  </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text"> Do I Need a Separate Business Account for WhatsApp Marketing?</h3>
                            <button className="btn" onClick={isOpen1 ? handleOut1 : handleChange1}>
                                {isOpen1 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen1 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Yes, It is highly recommended that you create a separate business account with the WhatsApp Business App or WhatsApp Business API for keeping it professional and to have more WhatsApp Business features. 
                               </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">How Can I Grow My WhatsApp Contact List?</h3>
                            <button className="btn" onClick={isOpen2 ? handleOut2 : handleChange2}>
                                {isOpen2 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen2 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                One way to increase your contact list on WhatsApp is to include your WhatsApp number in your website, social media channels, mails and in addition reward users for subscribing.
                                      </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text">What Types of Content Can I Share on WhatsApp for Marketing?</h3>
                            <button className="btn" onClick={isOpen3 ? handleOut3 : handleChange3}>
                                {isOpen3 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen3 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                WhatsApp supports different types of content that you can transmit such as text, photos, videos and linked materials from blogs or articles, announcements about goods and services or customer surveys. 
                                   </h5>
                            </div>
                        )}
                    </div>
                    <div className="border border-1 rounded mb-3 bg-white">
                        <div className="d-flex justify-content-between align-items-center p-3">
                            <h3 className="fq-text"> How Can I Measure the ROI of My WhatsApp Marketing Efforts? </h3>
                            <button className="btn" onClick={isOpen4 ? handleOut4 : handleChange4}>
                                {isOpen4 ? <IoIosArrowDropdown size={30} /> : <IoIosArrowDropright size={30} />}
                            </button>
                        </div>
                        {isOpen4 && (
                            <div className="p-3">
                                <h5 className="fq-para">
                                Trackable key metrics for WhatsApp marketing campaigns include delivery rate, open rate, CTR, conversion rate, cost of customer acquisition, lifetime value of the customer metrics. 
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