import './Learn.css';
const Form = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-start p-3 p-md-5">
                <div className="col-12 col-md-12 col-lg-8 p-4 bg rounded-4">
                    <div className="mb-3">
                        <h5 className="text-start text-dark">Full Name</h5>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-dark">Email Address</h5>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-dark">Phone Number</h5>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-dark">Interested In :</h5>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="fullStack"
                                    />
                                    <label
                                        className="form-check-label text-dark"
                                        htmlFor="fullStack"
                                    >
                                        Full Stack Development
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="digitalMarketing"
                                    />
                                    <label
                                        className="form-check-label text-dark"
                                        htmlFor="digitalMarketing"
                                    >
                                        Digital Marketing
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="uiUx"
                                    />
                                    <label
                                        className="form-check-label text-dark"
                                        htmlFor="uiUx"
                                    >
                                        UI/UX Designing
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="graphicDesign"
                                    />
                                    <label
                                        className="form-check-label text-dark"
                                        htmlFor="graphicDesign"
                                    >
                                        Graphic Designing
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className='d-flex'>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <div className='mx-1'>
                                    <label className="form-check-label text-2" htmlFor="flexCheckDefault">
                                        I agree to the Terms and Conditions
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center d-flex justify-content-center align-items-center mt-4'>
                        <button className='btn rounded-3 px-4 py-2 text-dark border-1' style={{ background: "#70BF29" }}>
                            Submit Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
