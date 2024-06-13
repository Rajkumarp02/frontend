import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import bde from "../../Assests/Home/bde.jpg";
import Web from "../../Assests/Home/web.jpg";
import app from "../../Assests/Home/app.jpg";
import dm from "../../Assests/Home/dm.png";
import bh from "../../Assests/Home/bh.jpg";
import wh from "../../Assests/Home/wh.jpg";
import ah from "../../Assests/Home/ah.png";
import dh from "../../Assests/Home/dh.jpg";
import seo from "../../Assests/Home/seo.jpg";
import sh from "../../Assests/Home/sh.png";
import ssh from "../../Assests/Home/ssh.jpg";
import sm from "../../Assests/Home/sm.jpg";
import aff from "../../Assests/Home/aff.jpg";
import afh from "../../Assests/Home/afh.jpg";
import ba from "../../Assests/Home/ba.jpg";
import bas from "../../Assests/Home/bas.jpg";
import em from "../../Assests/Home/EM.jpg";
import bah from "../../Assests/Home/BP.jpg";
import uiux from "../../Assests/Home/UIUX.jpg";
import fa from "../../Assests/Home/FA.jpg";
import eh from "../../Assests/Home/eh.jpg";
import baah from "../../Assests/Home/bah.jpg";
import uh from "../../Assests/Home/uh.jpg";
import fh from "../../Assests/Home/fh.jpg";
import bc from "../../Assests/Home/Bc.jpg";
import bch from "../../Assests/Home/bch.jpg";
import legal from "../../Assests/Home/legal.jpg";
import lh from "../../Assests/Home/lh.jpg";
import left from "../../Assests/Home/left.png";
import right from "../../Assests/Home/right.png";
import './Home.css';

const services = [
    { image: bde, alt: "BDE", content: "Content for BDE", hoverImage: bh },
    { image: Web, alt: "Web Design", content: "Content for Web Design", hoverImage: wh },
    { image: app, alt: "App Development", content: "Content for App Development", hoverImage: ah },
    { image: dm, alt: "Digital Marketing", content: "Content for Digital Marketing", hoverImage: dh },
    { image: sm, alt: "Social Media", content: "Content for Social Media", hoverImage: sh },
    { image: seo, alt: "SEO", content: "Content for SEO", hoverImage: ssh },
    { image: ba, alt: "Business Analysis", content: "Content for Business Analysis", hoverImage: bas },
    { image: aff, alt: "Affiliate Marketing", content: "Content for Affiliate Marketing", hoverImage: afh },
    { image: em, alt: "Email Marketing", content: "Content for Email Marketing", hoverImage: eh },
    { image: bah, alt: "Business Analysis", content: "Content for Business Analysis", hoverImage: baah },
    { image: uiux, alt: "UI/UX Design", content: "Content for UI/UX Design", hoverImage: uh },
    { image: fa, alt: "Financial Analysis", content: "Content for Financial Analysis", hoverImage: fh },
    { image: bc, alt: "Blockchain", content: "Content for Blockchain", hoverImage: bch },
    { image: legal, alt: "Legal Services", content: "Content for Legal Services", hoverImage: lh },
    { image: app, alt: "App Development", content: "Content for App Development", hoverImage: ah },
];

export const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="custom-arrow custom-prev d-flex justify-content-md-start"
            style={{ outline: "none", background: "none", border: "none" }}
            onClick={onClick}
        >
            <img src={left} alt="left" className='w-50 h-50' />
        </button>
    );
};

export const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="custom-arrow custom-next d-flex justify-content-md-end"
            style={{ outline: "none", background: "none", border: "none" }}
            onClick={onClick}
        >
            <img src={right} alt="right" className='w-50 h-50' />
        </button>
    );
};

const ServiceCard = () => {
    const sliderRef = useRef(null);
    const [hoveredImage, setHoveredImage] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="slider-container gap-2 p-md-5">
            <Slider ref={sliderRef} {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="p-md-3">
                        <div className="image-container">
                            <img
                                src={hoveredImage === service.image ? service.hoverImage : service.image}
                                alt={service.alt}
                                className="w-100 h-100"
                                onMouseEnter={() => setHoveredImage(service.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ServiceCard;
