import one from "../../../Assests/sm/Pic3.png";
import two from "../../../Assests/sm/Pic-1.png";
import three from "../../../Assests/sm/Pic-2.png";
import four from "../../../Assests/sm/Pic-4.png";
import five from "../../../Assests/sm/Pic-7.png";
import six from "../../../Assests/sm/Pic-9.png";
import "../SEO/SEO.css";

const ProcessCard  = () => {
  return (
    <div className="container p-md-5">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {[
        {
          icon:one,
          title: "Choosing Goals",
          text: "We study your business background and identify the PPC goals that are suitable for your business objectives.",
        },
        {
          icon:four,
          title: "Creating Ad Content",
          text: "We research your competition to learn what they are doing and use this knowledge to create distinctive advertisements for your brand.",
        },
        {
          icon:three,
          title: "Optimize Landing Page",
          text: "We constantly work to make sure that the advertisements we offer give users pleasant experiences. As a result, we recommend youto consider improving the pages that users land on in a way that considers the relevance of the advertisements put there.",
        },
        {
          icon:five,
          title: "Conversion Tracking Configuration",
          text: "Advanced conversion tracking system implemented in your own website will help you properly track all your conversions from Google ads without missing any of them.",
        },
        {
          icon:two,
          title: "High-level Ad Bid Strategy",
          text: "Our strategy involves setting higher bids than competitors in order to get a disproportionate share of the attention with the adjustment for location, device and audience.",
        },
        {
          icon:six,
          title: "Ad Tracking & Review",
          text: "Our crew constantly checks out Google ad campaigns to avoid issues.",
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
