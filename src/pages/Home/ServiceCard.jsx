import React, { useState } from 'react';
import bde from "../../Assests/Home/bde.jpg";
import Web from "../../Assests/Home/web.jpg";
import app from "../../Assests/Home/app.jpg";
import dm from "../../Assests/Home/dm.png";
import bh from "../../Assests/Home/bh.jpg";
import wh from "../../Assests/Home/wh.jpg";
import ah from "../../Assests/Home/ah.png";
import dh from "../../Assests/Home/dh.jpg";
import left from "../../Assests/Home/left.png";
import right from "../../Assests/Home/right.png";
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

import './Home.css';

const ServiceCard = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;
    const [hoveredImage, setHoveredImage] = useState(null);

    const services = [
        { image: bde, alt: "BDE", content: "Content for BDE", hoverImage: bh },
        { image: Web, alt: "Web Design", content: "Content for Web Design", hoverImage: wh },
        { image: app, alt: "App Development", content: "Content for App Development", hoverImage: ah },
        { image: dm, alt: "Digital Marketing", content: "Content for Digital Marketing", hoverImage: dh },
        { image: sm, alt: "sm", content: "Content for SocialMeida", hoverImage: sh },
        { image: seo, alt: "seo", content: "Content for SEO", hoverImage: ssh },
        { image: ba, alt: "seo", content: "Content for SocialMeida", hoverImage: bas },
        { image: aff, alt: "seo", content: "Content for SocialMeida", hoverImage: afh },
        { image: em, alt: "em", content: "Content for emailmarketing", hoverImage: eh },
        { image: bah, alt: "seo", content: "Content for SEO", hoverImage: baah},
        { image: uiux, alt: "seo", content: "Content for SocialMeida", hoverImage: uh },
        { image: fa, alt: "seo", content: "Content for SocialMeida", hoverImage: fh },
        { image: bc, alt: "seo", content: "Content for SocialMeida", hoverImage: bch},
        { image: Web, alt: "seo", content: "Content for SocialMeida", hoverImage: wh },
        { image: legal, alt: "seo", content: "Content for SocialMeida", hoverImage: lh },
        { image: app, alt: "seo", content: "Content for SocialMeida", hoverImage: ah },
    ];

    const nextSlide = () => {
        const nextIndex = startIndex + itemsPerPage;
        if (nextIndex < services.length) {
            setStartIndex(nextIndex);
        }
    };

    const prevSlide = () => {
        const prevIndex = startIndex - itemsPerPage;
        if (prevIndex >= 0) {
            setStartIndex(prevIndex);
        }
    };

    return (
        <div>
            <div className=" d-flex justify-content-between">
                <div className=''>
               <button style={{ outline: "none", background: "none", border: "none" }} onClick={prevSlide}><img src={left} alt='left' className='w-100 h-100' /></button>
                </div>
                <div className=''>
                    <button className='' style={{ outline: "none", background: "none", border: "none" }} onClick={nextSlide} ><img src={right} alt='right' className='w-100 h-100' /></button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {services.slice(startIndex, startIndex + itemsPerPage).map((service, index) => (
                        <div key={index} className="col-md-3">
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
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
