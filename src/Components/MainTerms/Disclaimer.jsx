import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import DisClaimer from "../../pages/Learn/Disclaimer";

const Disclaimer  = () => {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-12 mt-5 p-md-5">
    <div className="mt-5">
        <DisClaimer/>
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

export default Disclaimer ;
