const ShippingPolicy  = () => {
  return (
    <div className="row">
    <div className="col-md-12  d-flex flex-column justify-content-md-start align-items-md-start mt-5 p-md-5">
    <div>
        <h6 className="text-service text-center text-md-start">Shipping Policy</h6>
    </div>
    <div>
        <p className="mt-3 service-team">
        Hurryep Technologies delivers e-learning courses electronically,
         so there is no traditional shipping involved. E-learning content is usually delivered electronically, 
         either through an online platform or via downloadable files. For more details, you can visit their website 
         (https://hurryep.in) or contact them at hurryeptech@gmail.com
         </p>
    </div>
    {/* <div className="d-flex justify-content-center justify-content-md-start align-items-center">
            <button className="btn" style={{ borderRadius: "50px", backgroundColor: "#70BF29", borderColor: "#70BF29", border: "2px", fontSize: "18px", fontWeight: "600", color: 'white' }}>Contact Us</button>
            </div> */}
    </div>
    </div>
  );
};

export default ShippingPolicy;
