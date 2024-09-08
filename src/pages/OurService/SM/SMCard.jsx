import first from "../../../Assests/sm/fb.png";
import second from "../../../Assests/sm/insta.png";
import third from "../../../Assests/sm/linked.png";
import four from "../../../Assests/sm/yt.png";
import five from "../../../Assests/sm/tw.png";
import six from "../../../Assests/sm/png.png";
import "../SEO/SEO.css";

const SMCard  = () => {
  return (
    <div className="container-fluid p-3 h-seo "  style={{ border: "1px solid", borderRadius: "20px", background: "rgba(112, 191, 41, 0.1)" }}>
    <div className="row p-md-5 row-gap-4">
        <div className="col-md-4 col-lg-4 col-12">
            <div className="h-seo box shadow-lg rounded-3 mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center p-3"> 
                    <img src={first} alt="" className="img-fluid w-25 h-100" />
                    <h3 className="hyp mt-2">Facebook Ads</h3>
                </div>
                <div className="text-start w-100">
                    <p className="hyp-para p-2">Do you want to develop your business with Facebook Ads? It's ideal for reaching your target demographic, with 2.7 billion active users. We make sure that you reach that audience with our 
                    personalized advertising that delivers the best return. Connect with clients where they spend the majority of their time today. Begin promoting your brand with Facebook Ads.</p>
                </div>
            </div>
        </div>

        <div className="col-md-4 col-lg-4 col-12">
            <div className="h-seo box shadow-lg rounded-3 mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center p-3"> 
                    <img src={second} alt="" className="img-fluid w-25 h-100" />
                    <h3 className="hyp mt-2">Instagram Ads</h3>
                </div>
                <div className="text-start w-100">
                    <p className="hyp-para p-2">
                    Do you want to get your brand noticed? On Instagram, we offer advertisements that suit your brand in order to reach your people, improve your target’s involvement and generate conversions. There are thousands of customers who can attest to its impressive results by seeing their business grow in a big way. Then let us assist you in building up an impressive profile across instagram.
                    </p>
                </div>
            </div>
        </div>

        <div className="col-md-4 col-lg-4 col-12">
            <div className="h-seo box shadow-lg rounded-3 mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center p-3"> 
                    <img src={third} alt="" className="img-fluid w-25 h-100" />
                    <h3 className="hyp mt-2">LinkedIn Ads</h3>
                </div>
                <div className="text-start w-100">
                    <p className="hyp-para p-2">
                    Welcome to the Future of B2B Marketing!
                    Join 10,000+ leaders on LinkedIn. You are able to reach 600M+ professionals with ads that lift your brand! At this point you could nurture your audience through personalized content. Additionally, you can monitor your success utilizing powerful analytics. You can start today for a transformation in your B2B marketing efforts
                    </p>
                </div>
            </div>
        </div>

        <div className="col-md-4 col-lg-4 col-12">
            <div className="h-seo box shadow-lg rounded-3 mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center p-3"> 
                    <img src={four} alt="" className="img-fluid w-25 h-100" />
                    <h3 className="hyp mt-2">YouTube Ads</h3>
                </div>
                <div className="text-start w-100">
                    <p className="hyp-para p-2">
                    Welcome to your Marketing Success Hub! Enter a world where your brand is king. Given that over 2 billion people watch YouTube each month, your material has limitless potential reach. Indeed, over 500 hours of video are posted every minute, reaching 73% of people in the
                    United States. Let us get your brand seen and heard.  
                    </p> 
                 </div>
            </div>
        </div>

        <div className="col-md-4 col-lg-4 col-12">
            <div className="h-seo box shadow-lg rounded-3 mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center p-3"> 
                    <img src={five} alt="" className="img-fluid w-25 h-100" />
                    <h3 className="hyp mt-2">Twitter Ads</h3>
                </div>
                <div className="text-start w-100">
                    <p className="hyp-para p-2">
                    Tweet Your Way to Stardom With Us. Build, Sell, and Grow with Expert Marketing. Discover the power of reaching out to over 330 million active users and millions of Twitter users each day.
                     Get more clicks. Increase likes and sales. Get experienced marketing assistance today!
                    </p>
                </div>
            </div>
        </div>

        <div className="col-md-4 col-lg-4 col-12">
            <div className="h-seo box shadow-lg rounded-3 mb-3">
                <div className="d-flex flex-column justify-content-center align-items-center p-3"> 
                    <img src={six} alt="" className="img-fluid w-25 h-100" />
                    <h3 className="hyp mt-2">Pinterest Ads</h3>
                </div>
                <div className="text-start w-100">
                    <p className="hyp-para p-2">
                    Use the reach of Pinterest! Reach 450+ million monthly users. Amplify engagements, sales, and brand awareness with engaging visuals. You'll get a better return on Pinterest by reaping the targeted audience and evergreen content. Start your Pinterest journey now!
                    </p>
                </div>
            </div>
        </div>     
    </div>
</div>
  );
};

export default SMCard ;
