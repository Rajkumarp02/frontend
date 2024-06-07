import React, { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import "./About.css";
import vector from "../../Assests/Abouts/vector.png";

const OurMission = () => {
  const location = useLocation();

  return (
    <div className="row">
      <div className="col-md-12 bg-white">
        <div className="p-md-5 mt-3 mt-md-1 text-center">
          <p className="description">
            Defining Our Purpose: Mission, Vision, and Values
          </p>
          <div className="d-md-flex text-center justify-content-md-center gap-md-3 mt-5">
            <div>
              <Link
                to="/aboutus"
                className={`btn h-100 ${location.pathname === "/aboutus" ? "active" : ""}`}
                style={{
                  backgroundColor: location.pathname === "/aboutus" ? "#000" : "#fff",
                  color: location.pathname === "/aboutus" ? "#fff" : "#000",
                  borderRadius: "20px",
                }}
              >
                <img src={vector} alt="vector icon" className="w-25" />
                <span className="w-100 h-50 fw-bold ps-2">Our Mission</span>
              </Link>
            </div>
            <div>
              <Link
                to="vision"
                className={`btn h-100 ${location.pathname === "/vision" ? "active" : ""}`}
                style={{
                  backgroundColor: location.pathname === "/aboutus/vision" ? "#000" : "#fff",
                  color: location.pathname === "/aboutus/vision" ? "#fff" : "#000",
                  borderRadius: "20px",
                }}
              >
                <img src={vector} alt="vector icon" className="w-25" />
                <span className="w-100 h-50 fw-bold ps-2">Our Vision</span>
              </Link>
            </div>
            <div>
              <Link 
                to="values"
                className={`btn h-100 ${location.pathname === "/values" ? "active" : ""}`}
                style={{
                  backgroundColor: location.pathname === "/aboutus/values" ? "#000" : "#fff",
                  color: location.pathname === "/aboutus/values" ? "#fff" : "#000",
                  borderRadius: "20px",
                }}
              >
                <img src={vector} alt="vector icon" className="w-25" />
                <span className="w-100 h-50 fw-bold ps-2">Our Values</span>
              </Link>
            </div>
          </div>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default OurMission;
