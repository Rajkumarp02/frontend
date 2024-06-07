import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import simple from "../../Assests/Home/simple.png";
import parvathi from "../../Assests/Home/parvathi.png";
import Ads from "../../Assests/Home/Ads.png";
import mrm from "../../Assests/Home/MRM.png";
import s2 from "../../Assests/Home/s2.png";
import rr from "../../Assests/Home/rr.png";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const testimonialsContent = [
    [
      {
        imgSrc: simple,
        company: "The Simple Works",
        text:
          "I decided to go with Hurryep because of the glowing recommendations I received from colleagues. It's clear professionalism."
      },
      {
        imgSrc: parvathi,
        company: "Parvathi Tradings",
        text:
          "I chose Hurryep for our website redesign because of their reputation for creating visually stunning and innovative."
      },
      {
        imgSrc: Ads,
        company: "Ads HandCrafts",
        text:
          "Working with Hurryep on our web development project was great from planning to implementation. The end result was a powerful."
      }
    ],
    [
      {
        imgSrc: mrm,
        company: "MRM Trading",
        text:
          "I chose Hurryep for our website redesign because of their reputation for creating visually stunning and innovative."
      },
      {
        imgSrc: s2,
        company: "S2 Tiles & Ceremics",
        text:
          "The team at Hurryep consistently impressed us with their professionalism and dedication."
      },
      {
        imgSrc: rr,
        company: "Bright Future Group Trust",
        text:
          "Hurryep's expertise in developing websites and software is evident in the seamless functionality."
      }
    ]
  ];
  return (
    <div className="row mt-0">
      <div className="col-md-12 px-5 py-5">
        <div className="container-fluid">
          <div className="p-md-5 text-md-center text-center">
            <h5 className="fw-semibold text-white text-testimonials">
              TESTIMONIALS
            </h5>
            <h5 className="text-service text-center mt-2 mt-md-5">
              Clients Speak: Their Experience with Us
            </h5>
          </div>
          <Slider {...settings}>
            {testimonialsContent.map((slide, slideIndex) => (
              <div key={slideIndex}>
                <div className="row mx-md-5 p-md-5 justify-content-center rounded">
                  {slide.map((testimonial, testimonialIndex) => (
                    <div
                      key={testimonialIndex}
                      className="col-xl-4 col-lg-4 col-md-12 col-12 mt-3 mt-md-3 mt-lg-0"
                    >
                      <div className="testimonial-card">
                        <div className="d-flex align-items-start">
                          <img
                            src={testimonial.imgSrc}
                            alt={testimonial.company}
                            className="testimonial-img"
                          />
                          <div className="text-start mt-2 flex-grow-1">
                            <h5 className="testimonial-company">
                              {testimonial.company}
                            </h5>
                            <div className="testimonial-stars">
                              <FaStar color="yellow" size={20} />
                              <FaStar color="yellow" size={20} />
                              <FaStar color="yellow" size={20} />
                              <FaStar color="yellow" size={20} />
                              <FaStar color="yellow" size={20} />
                            </div>
                          </div>
                        </div>
                        <div className="text-start py-3 testimonial-text">
                          {testimonial.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
