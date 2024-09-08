import "./SEO.css";
import first from "../../../Assests/Ourservice/seo/seo-2.webp"
const First = () => {
    return (
        <div className="container py-5" data-aos="fade-up">
            <div className="row d-flex justify-content-center align-items-stretch text-center text-md-start">
                <div className="col-md-6 col-12 mb-3 mb-md-0">
                    <img src={first} alt="discover our story" className="img-fluid rounded w-100 h-100" />
                </div>
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <div className="service-team">
                        <p className="mt-3 text-white mb-2">
                            Investing in SEO services will help your website rank higher on
                            search engines such as Google. People can easily find online
                            businesses. SEO increases your website's content, speed, and
                            usability, resulting in more views and revenues.
                            compared to advertising, which stops working when you stop paying,
                            SEO continues to drive traffic to your website over time. It will assist
                            you in better understanding what your clients want so that you can
                            tailor your marketing efforts. So, with SEO, your company may
                            steadily expand, gain credibility, and stand out online.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;
