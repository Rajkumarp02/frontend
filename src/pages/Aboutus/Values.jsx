import React from 'react'
import Vis from "../../Assests/Abouts/values.jpg";
 function Values ()  {
  return (
    <div className="container-fluid">
    <div className="row p-md-5">
      <div className="col-md-12 col-lg-6 mt-4 mt-md-0 p-lg-5 d-flex align-items-center justify-content-center">
        <img
          src={Vis}
          alt="mission"
          className="img-fluid rounded-3 mission-img"
        />
      </div>
      <div className="col-md-12 col-lg-6 mt-lg-5 mt-md-2 p-lg-5 p-2 text-start d-flex align-items-center justify-content-center">
        <p className="para">
        At Hurryep Technologies, we pride ourselves on our expertise in digital marketing, social media handling, website development, app development, SEO services, competitor analysis, UI/UX design, business strategy, and ads campaigns. With years of industry experience, our dedicated team is committed to providing innovative solutions tailored to meet your specific goals and objectives.
        </p>
      </div>
    </div>
  </div>
  )
}
export default Values;