import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Form from "./Form";

const Career = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {/* <div className="col-12 img">
                    <div className="p-5 text-md-start mt-5 text-white" style={{
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "32px",
                        font: "Poppins"
                    }}>
                        <h5>Home / Career</h5>
                    </div>
                </div> */}
            <div className="bg-c container-fluid">
                <div className="col-12 col-md-7 mt-5">
                        <Form />
                    </div>
        </div>
            <div className="mt-5">
                <Contact />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
         </div>
    );
};

export default Career;
