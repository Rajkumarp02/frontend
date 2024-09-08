import b1 from "../../../Assests/google/b1.jpg";
import b2 from "../../../Assests/google/b2.jpg";
import b3 from "../../../Assests/google/b3.jpg";
import b4 from "../../../Assests/google/b4.jpg";
import b5 from "../../../Assests/google/b5.jpg";
import "../SEO/SEO.css";

const Benifits  = () => {
  return (
<div className="container-fluid p-md-3">
    <div className="row p-md-5 mb-4 column-gap-5">
        <div className="text-center d-flex justify-content-center align-items-center">
             <h3 className="p-md-2 mb-5 container b-text">Why Should Businesses Consider Investing in Google Ads?</h3>
        </div>
        <div className="col-md-12  p-md-5  p-lg-0 col-lg-2">
            <img src={b1} alt="" className="rounded img-fluid"/>
        </div>
        <div className="col-md-12 mt-3 mt-md-0 p-md-5  p-lg-0 col-lg-2">
            <img src={b2} alt="" className="rounded img-fluid"/>
        </div>
        <div className="col-md-12 mt-3 mt-md-0 p-md-5  p-lg-0 col-lg-2">
            <img src={b3} alt="" className="rounded img-fluid"/>
        </div>
        <div className="col-md-12 mt-3 mt-md-0 p-md-5  p-lg-0 col-lg-2">
            <img src={b4} alt="" className="rounded img-fluid"/>
        </div>
        <div className="col-md-12 mt-3 mt-md-0 p-md-5  p-lg-0 col-lg-2">
            <img src={b5} alt="" className="rounded img-fluid"/>
        </div>
    </div>
   </div>
  );
};

export default Benifits ;
