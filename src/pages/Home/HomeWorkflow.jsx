import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import research from "../../Assests/Home/research.png";
// import design from "../../Assests/Home/develop.png";
// import development from "../../Assests/Home/deploy.png";
// import deployment from "../../Assests/Home/deployment.jpg";
// import maintenance from "../../Assests/Home/maintance.png";
import "../../pages/OurService/OurService.css";
import bg from "../../Assests/Home/bg-set.jpg"


const HomeWorkflow = () => {
  return (
    <div className="row p-md-3 p-lg-5 p-0">
      <div className="col-12 p-md-5">
          <img src={bg} alt='' className='w-100 responsive-img' />
        {/* <div className="p-md-5 mt-3 mt-md-1 text-center">
          <p className="text-service">Dynamic Workflow Ensemble</p>
          <h5 className="service-team">
            Seamlessly integrating technology and teamwork, maximizes efficiency and precision for unparalleled results
          </h5>
        </div>

        <div className="row p-md-5 mx-lg-5 justify-content-center">
          {[
            { src: research, title: 'Research' },
            { src: design, title: 'Design' },
            { src: development, title: 'Development' },
            { src: deployment, title: 'Deployment' },
            { src: maintenance, title: 'Maintenance' }
          ].map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-lg-2 mb-5">
              <div className="w-100 bg-white rounded-2 text-center d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
                <img src={item.src} alt={item.title} className="w-75" />
                <h6 className="text-center p-3" style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "32px",
                }}>{item.title}</h6>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HomeWorkflow;
