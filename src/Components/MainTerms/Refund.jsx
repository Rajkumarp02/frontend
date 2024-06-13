import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Cancel from "../../pages/Learn/Cancel";

const Refund = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-5">
            <div className="mt-5">
                <Cancel/>
            </div>
            <div className="mt-5">
                <Contact/>
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
        </div>
        </div>
    );
};

export default Refund;
