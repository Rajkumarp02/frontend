import web from "../../Assests/Home/web.png";
import App from "../../Assests/Home/App.png";
import digital from "../../Assests/Home/digital.png";
import social from "../../Assests/Home/social.png";
import seo from "../../Assests/Home/SEO.png";
import BE from "../../Assests/Home/BE.png";
import p from "../../Assests/Home/p.png";
import r from "../../Assests/Home/r.png";
import c from "../../Assests/Home/click.png";
import pen from "../../Assests/Home/pen.png";
import f from "../../Assests/Home/fi.png";
import le from "../../Assests/Home/le.png";
import "./Home.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const Service = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesContent = [
    [
      { imgSrc: web, title: "Web Development", description: "Crafted tailored, responsive websites." },
      { imgSrc: App, title: "App Development", description: "Customized mobile applications for all platforms." },
      { imgSrc: digital, title: "Digital Marketing", description: "Targeted campaigns for online visibility." },
      { imgSrc: social, title: "Social Media Marketing", description: "Engage audiences and boost brand presence." }
    ],
    [
      { imgSrc: seo, title: "SEO Service", description: "Improve search engine rankings and visibility." },
      { imgSrc: BE, title: "Business Analysis & Strategies", description: "Consulting for winning business strategies." },
      { imgSrc: p, title: "Affiliate & Influencer Marketing", description: "Amplifying Brand Reach and Conversions " },
      { imgSrc: r, title: "Email & Content Marketing", description: "Driving Engagement and Conversion " }
    ],
    [
      { imgSrc: c, title: "Branding & Promotion", description: "Memorable brand experiences for audience engagement." },
      { imgSrc: pen, title: "UI UX Design", description: "Elevate User Experiences through Intuitive Design" },
      { imgSrc: f, title: "Finance and Auditing", description: "Financial clarity and regulatory compliance." },
      { imgSrc: le, title: "Legal Assistance", description: "Expert guidance for legal compliance." }
    ]
  ];

  return (
    <div className="row">
      <div className="col-md-12  p-5">
        <>
          <Slider {...settings}>
            {slidesContent.map((slide, slideIndex) => (
              <div key={slideIndex}>
                <div className="row justify-content-center">
                  {slide.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4">
                      <div className="service-card text-center d-flex flex-column align-items-center p-3 h-100">
                        <img src={service.imgSrc} alt={service.title} className="service-img" />
                        <h6 className="service-title mt-3">{service.title}</h6>
                        <p className="service-description">{service.description}</p>
                        <button className="btn custom-btn mt-auto" style={{ borderRadius: "50px", color: "#70BF29", border: "4px solid #70BF29", fontSize: "16px", fontWeight: "700" }}>Discover More</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </>
      </div>
    </div>
  );
};

export default Service;
