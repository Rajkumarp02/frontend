import Vn from "../../Assests/Abouts/vision.jpg";
 const Vision = () => {
  return (
        <div className="container-fluid">
          <div className="row p-md-5">
            <div className="col-md-12 col-lg-6 mt-4 mt-md-0 p-lg-5 d-flex align-items-center justify-content-center">
              <img
                src={Vn}
                alt="mission"
                className="img-fluid rounded-3 mission-img"
              />
            </div>
            <div className="col-md-12 col-lg-6 mt-lg-5 mt-md-2 p-lg-5 p-2 text-start d-flex align-items-center justify-content-center">
              <p className="para">
                Our vision is to create the biggest tech platform on the floor
                with innovations & trending technologies . We are in the future
                path of Hi-tech E-commerce , gamings , education & payment
                gateways. Aspiring to build technology solutions with a global
                reach, making a difference across borders and cultures.
                Committing to sustainable practices in technology development
                and operations, ensuring a positive environmental impact.
              </p>
            </div>
          </div>
        </div>
  );
};
export default Vision;