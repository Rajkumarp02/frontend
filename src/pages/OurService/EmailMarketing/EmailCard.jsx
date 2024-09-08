import React from "react";
import first from "../../../Assests/Email/e.png";
import second from "../../../Assests/Email/m.png";
import third from "../../../Assests/Email/d.png";
import four from "../../../Assests/Email/auto.png";
import five from "../../../Assests/Email/audi.png";
import six from "../../../Assests/Email/code.png";
import seven from "../../../Assests/Email/ab.png";
import eight from "../../../Assests/Email/msg.png";
import nine from "../../../Assests/Email/mb.png";
import ten from "../../../Assests/Email/24.png";
import "./Email.css"; 

const EmailCard = () => {
  return (
    <div className="container-fluid email-card-container">
      <div className="row row-gap-4 mx-auto d-flex justify-content-center">
        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={first} alt="Easy Email Creation" className="img-fluid" />
              <h3 className="email-card-title">Easy Email Creation</h3>
            </div>
            <div className="email-card-description">
              <p>Build great emails with no coding in our drag and drop editor.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={second} alt="Personalized Messages" className="img-fluid" />
              <h3 className="email-card-title">Personalized Messages</h3>
            </div>
            <div className="email-card-description">
              <p>Send emails of interest-based relevance for maximum engagement.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={third} alt="Detailed Analytics" className="img-fluid" />
              <h3 className="email-card-title">Detailed Analytics</h3>
            </div>
            <div className="email-card-description">
              <p>Strategy better with real-time information to see how well your emails are doing.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={four} alt="Automation" className="img-fluid" />
              <h3 className="email-card-title">Automation</h3>
            </div>
            <div className="email-card-description">
              <p>Set and forget emails send the right content at the right time.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={five} alt="Audience Targeting" className="img-fluid" />
              <h3 className="email-card-title">Audience Targeting</h3>
            </div>
            <div className="email-card-description">
              <p>Get maximum effects—the right message to different parts.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-auto row-gap-4 d-flex justify-content-center mt-5">
        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={six} alt="Integration" className="img-fluid" />
              <h3 className="email-card-title">Integration</h3>
            </div>
            <div className="email-card-description">
              <p>Integrate with the apps that you know best to make your email marketing more efficient.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={seven} alt="A/B Testing" className="img-fluid" />
              <h3 className="email-card-title">A/B Testing</h3>
            </div>
            <div className="email-card-description">
              <p>Easily create a right vs. left campaign to see what works the best.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={eight} alt="High Deliverability" className="img-fluid" />
              <h3 className="email-card-title">High Deliverability</h3>
            </div>
            <div className="email-card-description">
              <p>A number of your messages can just end up in the dustbin-rather, in the spam box-than the longed-for and needy inbox.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={nine} alt="Mobile-Friendly Design" className="img-fluid" />
              <h3 className="email-card-title">Mobile-Friendly Design</h3>
            </div>
            <div className="email-card-description">
              <p>Be confident about the fact that no matter whatever device or email viewer your recipient uses, your emails are going to look perfect.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-lg-2 col-12">
          <div className="email-card-box">
            <div className="d-flex flex-column justify-content-center align-items-center p-md-3">
              <img src={ten} alt="24/7 Support" className="img-fluid" />
              <h3 className="email-card-title">24/7 Support</h3>
            </div>
            <div className="email-card-description">
              <p>They can at any time seek the help of our support staff, which is timely and efficient.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
