import React from "react";
import "./About.css";
import je from "../../Assests/Abouts/Je.jpg";
import A from "../../Assests/Abouts/A.jpg";
import R from "../../Assests/Abouts/R.jpg";
import Ab from "../../Assests/Abouts/Ab.jpg";
import Aj from "../../Assests/Abouts/Aj.jpg";
import Su from "../../Assests/Abouts/Su.jpg";
import Raj from "../../Assests/Abouts/Raj.jpg";
import M from "../../Assests/Abouts/M.jpg";
import S from "../../Assests/Abouts/S.jpg";
import D from "../../Assests/Abouts/D.jpg";
import J from "../../Assests/Abouts/J.jpg";
import Re from "../../Assests/Abouts/Re.jpg";

const OurTeam = () => {
  return (
    <div className="container-fluid">
      <div className="p-md-5 text-center">
        <h5 className="fw-semibold text-white text-testimonials">MEET OUR TEAM</h5>
        <h5 className="description mt-4">Explore the Talented Individuals Who Make Our Mission Possible</h5>
      </div>
      <div className="row p-3">
        {[
          { imgSrc: je, name: "Jeeva Kumar", role: "Founder & CEO" },
          { imgSrc: A, name: "Ashok Kumar", role: "Founder & CTO" },
          { imgSrc: R, name: "Ravi Kumar", role: "Founder & COO" },
          { imgSrc: Ab, name: "Abishek", role: "BDA" },
          { imgSrc: Aj, name: "Ajith Kumar", role: "Graphic Designer" },
          { imgSrc: D, name: "Devika", role: "Frontend Developer" },
          { imgSrc: J, name: "Jannath", role: "Frontend Developer" },
          { imgSrc: Re, name: "Revanth", role: "Digital Marketing" },
          { imgSrc: Raj, name: "Raj Kumar", role: "Fullstack Developer" },
          { imgSrc: Su, name: "Subash", role: "Graphic Designer" },
          { imgSrc: S, name: "Surendhar", role: "Fullstack Developer" },
          { imgSrc: M, name: "ManojBalan", role: "Frontend Developer" },
        ].map((teamMember, index) => (
          <div key={index} className="col-md-6 col-lg-3 col-xl-2 mx-auto mt-3">
            <div className="testimonial-card rounded-3 d-flex flex-column align-items-center">
              <img src={teamMember.imgSrc} alt="" className="img-fluid w-100 h-100 p-md-2 rounded-4 shadow-lg" />
              <div className="mt-2 text-center">
                <h5 className="fw-semibold text-black" style={{ fontSize: "18px", lineHeight: "32px" }}>{teamMember.name}</h5>
                <p className="text-black" style={{ fontSize: "14px", lineHeight: "24px" }}>{teamMember.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
