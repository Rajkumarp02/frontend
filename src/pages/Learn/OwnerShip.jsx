import Im from "../../Assests/Ourservice/Im-u.jpg"
const OwnerShip = () => {
    return (
        <div className="container-fluid" style={{
            border: "1px solid",
            borderRadius: "0px",
            background: "rgba(112, 191, 41, 0.1)",
            padding: 0
        }}>
          <div className="row no-gutters h-100">
          <div className="col-md-12 col-lg-6 mt-o mt-md-5 d-flex flex-column justify-content-center p-4 p-md-5 h-100">
              <div>
                  <h6 className="text-service text-md-start text-center">Ownership of Intellectual Property</h6>
              </div>
              <div>
                  <p className="mt-md-3 service-team">
                  All intellectual property rights, including but not limited to copyrights, trademarks, patents, and trade secrets, associated with the services provided by Hurryep Technologies, shall remain the exclusive property of Hurryep Technologies. Any materials, including software, designs, documents, and other creations, produced or developed
                   in the course of delivering services shall be owned by Hurryep Technologies unless otherwise agreed upon in writing.
                   </p>
              </div>
          </div>
          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center p-0" style={{ borderRight: "1px solid" }}>
              <img src={Im} alt="discover our story" className="w-100 h-100" />
          </div>
      </div>
      </div>
    );
};

export default OwnerShip;
