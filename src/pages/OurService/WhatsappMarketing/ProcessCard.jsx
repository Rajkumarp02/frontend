import one from "../../../Assests/wp/pic-1.png";
import two from "../../../Assests/wp/pic-2.jpg";
import three from "../../../Assests/wp/pic-3.png";
import four from "../../../Assests/wp/pic-4.png";
import five from "../../../Assests/wp/pic-5.png";
import six from "../../../Assests/wp/pic-6.png";
import seven from "../../../Assests/wp/pic-7.png";
import eight from "../../../Assests/wp/pic-8.png";
const Benefits  = () => {
  return (
    <div className="container p-md-5">
          <div className="text-center d-flex justify-content-center align-items-center">
             <h3 className="p-md-2 mb-5 container b-text">What are the benefits of Whatsapp Marketing for businesses?</h3>
        </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {[
        {
          icon:one,
          title: "Instant Chats",
          text: "No need to wait for emails or phone calls from your customers; talk to them instantly using WhatsApp.",
        },
        {
          icon:two,
          title: "Reach Everyone, Everywhere",
          text: "Whether your customers are down the street or on the other side of the globe, you can reach them on WhatsApp.",
        },
        {
          icon:three,
          title: "Save Money",
          text: "No overpriced ads; reach out to your audience with WhatsApp.",
        },
        {
          icon:four,
          title: "Connect Better ",
          text: "Personalize with customers. Update and message back to keep them in the conversation.",
        },
        {
          icon:five,
          title: "Always Accessible",
          text: "Message with customers anywhere, anytime WhatsApp is on mobile and desktop, so you're always connected.",
        },
       
        {
            icon:six,
            title: "Useful Features",
            text: "Share images, videos, and documents to make your messages more engaging.",
          },
          {
            icon:seven,
            title: "Learn from Data",
            text: "Understand what your customers like and how they interact with your messages.",
          },
          
          {
            icon:eight,
            title: "Works with Everything",
            text: "Use WhatsApp in conjunction with other marketing strategies for more effective results.",
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
