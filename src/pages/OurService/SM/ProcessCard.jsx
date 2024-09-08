import "../SEO/SEO.css";
import one from "../../../Assests/sm/Pic3.png";
import two from "../../../Assests/sm/Pic-1.png";
import three from "../../../Assests/sm/Pic-2.png";
import four from "../../../Assests/sm/Pic-4.png";
import five from "../../../Assests/sm/Pic-5.png";
import six from "../../../Assests/sm/Pic-6.png";
import seven from "../../../Assests/sm/Pic-7.png";
import eight from "../../../Assests/sm/Pic-8.png";
import nine from "../../../Assests/sm/Pic-9.png";

const ProcessCard = () => {
  return (
    <div className="container p-md-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {[
          {
            icon:one,
            title: "Set Goals",
            text: "Decide what you want to achieve through social media, eg get more customers or raise brand awareness.",
          },
          {
            icon:two,
            title: "Know Your Audience",
            text: "Know who you are targeting so you can produce content they will enjoy.",
          },
          {
            icon:three,
            title: "Choose Platforms",
            text: "Choose the social media platforms your target audience uses most, eg Facebook, Instagram, or Twitter.",
          },
          {
            icon:four,
            title: "Create Good Content",
            text: "Create posts, images, or videos that your audience will find entertaining or useful.",
          },
          {
            icon:five,
            title: "Stay Engaged",
            text: "Be consistent in posting so that your audience would know when to expect new content from you.",
          },
          {
            icon:six,
            title: "Stay Connected",
            text: "Respond to the comments and messages and build relationships.",
          },
          {
            icon:seven,
            title: "Performance Check",
            text: "How is your post performing? What works, what does not?",
          },
          {
            icon:eight,
            title: "Explore Ideas",
            text: "Try different types of content. This will help one to see what gets the best of responses from people.",
          },
          {
            icon:nine,
            title: "Feedback Insight",
            text: "What are people saying about you? Listen as it will help in enhancing the social media strategy.",
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

export default ProcessCard;
