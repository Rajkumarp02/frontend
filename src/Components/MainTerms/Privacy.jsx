import PrivacyPolicy from "../../pages/Learn/PrivacyPolicy";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Privacy = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-5">
           <div className="mt-5">
                <PrivacyPolicy/>
            </div>
            <div className="mt-5">
                <Contact />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
        </div>
        </div>
    );
};

export default Privacy;
