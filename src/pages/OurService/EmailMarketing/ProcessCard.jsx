import one from "../../../Assests/sm/pic-10.png";
import two from "../../../Assests/sm/Pic-1.png";
import three from "../../../Assests/sm/pic-11.png";
import four from "../../../Assests/sm/pic-15.png";
import five from "../../../Assests/sm/pic-14.png";
import six from "../../../Assests/sm/pic-16.png";
import "../SEO/SEO.css";

const ProcessCard  = () => {
  return (
    <div className="container p-md-5">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {[
        {
          icon:one,
          title: "Smart Planning",
          text: "We begin by knowing your goals, audience, and strategy that works for you.",
        },
        {
          icon:four,
          title: " Custom Content",
          text: "We design eye-catching and engaging emails that talk to your audience.",
        },
        {
          icon:three,
          title: "Targeted Reach",
          text: "Our focus is on making sure the right emails get to the right -people at the right time.",
        },
        {
          icon:five,
          title: "Automation",
          text: "We help you to send the most personal email possible to build relations that generate real sales with the help of our cutting edge tools.",
        },
        {
          icon:two,
          title: "Track & Improve",
          text: "We go deep inside your campaign performance to continue helping you improve it.",
        },
        {
          icon:six,
          title: "Top-notch Delivery",
          text: "We get your emails in the inbox, not in spam.",
        },
       
      ].map((item, index) => (
        <div key={index} className="col">
          <div className="border border-1 box shadow-lg rounded-3 h-100 d-flex flex-column p-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={item.icon} alt="" className="img-fluid w-25" />
              <h3 className="hyp-process mt-2 p-2">{item.title}</h3>
            </div>
            <div className="text-start w-100 mt-auto">
              <p className="hyp-para p-2">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProcessCard ;
