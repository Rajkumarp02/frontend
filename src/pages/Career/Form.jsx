import React from 'react';
import "./Career.css";
const Form = () => {
    return (
        <div className="container mt-5 mb-3  d-flex justify-content-center align-items-center mx-md-5 mx-lg-0 mx-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8 p-4 bg-career rounded">
                    <div className=" d-flex justify-content-center align-items-center ">
                        <h3 className="text-bg-main text-white">Career Enquiry Form</h3>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Full Name</h5>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter Your Name"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Email Address</h5>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Phone Number</h5>
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Enter Your Phone Number"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Date of Birth</h5>
                            <input
                                name="dob"
                                type="date"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Gender</h5>
                            <select name="gender" className="form-control">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Experience</h5>
                            <select name="experience" className="form-control">
                                <option value="">Select Experience</option>
                                <option value="0-1">0-1 years</option>
                                <option value="1-3">1-3 years</option>
                                <option value="3-5">3-5 years</option>
                                <option value="5+">5+ years</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Highest Qualification</h5>
                            <input
                                name="qualification"
                                type="text"
                                placeholder="Enter Your Qualification"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Role</h5>
                            <select name="role" className="form-control">
                                <option value="">Select Role</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                                <option value="analyst">Analyst</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Native District</h5>
                            <input
                                name="district"
                                type="text"
                                placeholder="Enter Your District"
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Work Location</h5>
                            <select name="workLocation" className="form-control">
                                <option value="">Select Work Location</option>
                                <option value="onsite">Onsite</option>
                                <option value="remote">Remote</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Are you interested to work as an intern?</h5>
                            <select name="internInterest" className="form-control">
                                <option value="">Select Option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className="text-start text-white">Upload File</h5>
                            <input
                                name="file"
                                type="file"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className='d-flex'>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <div className='mx-1'>
                                    <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                                        I agree to the Terms and Conditions
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center d-flex justify-content-center align-items-center mt-5'>
                        <button className='btn rounded-3 px-2 py-2 text-white border border-1' style={{ background: "#70BF29" }}>Submit Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
