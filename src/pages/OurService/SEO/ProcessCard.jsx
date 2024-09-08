import one from "../../../Assests/Ourservice/seo/icon.png";
import two from "../../../Assests/Ourservice/seo/icon1.png";
import three from "../../../Assests/Ourservice/seo/icon5.png";
import four from "../../../Assests/Ourservice/seo/icon4.png";
import five from "../../../Assests/Ourservice/seo/icon3.png";
import six from "../../../Assests/Ourservice/seo/icon2.png";
import "./SEO.css";

const ProcessCard = () => {
    return (
    <div className="container p-md-5">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {[
        {
          icon:one,
          title: "Keyword Research",
          text: "Find audience searches. Optimize content. Easily done.",
        },
        {
          icon:two,
          title: "Website Audit",
          text: " Find and solve all technical issues for proper functioning",
        },
        {
          icon:three,
          title: "On-Page Optimization",
          text: "Enhance content with targeted keywords for top-notch on-page optimization",
        },
        {
          icon:four,
          title: "Content Creation",
          text: "Create high-quality, helpful content",
        },
        {
          icon:five,
          title: "Link Building",
          text: "Get high-quality links from trusted websites",
        },
        {
          icon:six,
          title: "Monitoring and Analysis",
          text: " Keep track of performance and change the strategy",
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
)
}

export default ProcessCard;
