import one from "../../../Assests/sm/Pic-1.png";
import two from "../../../Assests/sm/Pic-7.png";
import three from "../../../Assests/sm/Pic-6.png";
import four from "../../../Assests/sm/pic-12.png";
import five from "../../../Assests/sm/pic-13.png";

const Benefits  = () => {
  return (
    <div className="container p-md-5">
          <div className="text-center d-flex justify-content-center align-items-center">
             <h3 className="p-md-2 mb-5 container b-text">What Are the Advantages of Using Email Marketing Services ?</h3>
        </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
      {[
        {
          icon:one,
          title: "Targeted Campaigns",
          text: "How do you get more fundamentally targeted advertising to reach the right set of people ?",
        },
        {
          icon:four,
          title: "High ROI",
          text: "Promote yourself for a reasonable fee and reach many potential clients.",
        },
        {
          icon:three,
          title: "Customer Engagement",
          text: "Interact with customers through a timely manner and purposeful form of communication that is clearly focused on the customer.",
        },
        {
          icon:five,
          title: "Brand Awareness",
          text: "As the target audience gets invariant with your presence, keep on increasing the amount of more informative content you share to keep on reminding them of your brand.",
        },
        {
          icon:two,
          title: "Increased Traffic",
          text: "The primary objective out of these is to get more people to your website, even if the end result you are looking for, which is more sales, may not be appreciated immediately.",
        },
       
      ].map((item, index) => (
        <div key={index} className="col">
          <div className="border border-1 box shadow-lg rounded-3 h-100 d-flex flex-column p-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={item.icon} alt="" className="img-fluid w-25" />
              <h3 className="hyp-process mt-2 p-2 text-center">{item.title}</h3>
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

export default Benefits ;
