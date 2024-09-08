import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../Assests/Navbar/logo.png";
import './Navbar.css';
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subDropdownOpen, setSubDropdownOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleNavItemClick = (sectionId) => {
        setIsOpen(false);
        const element = document.getElementById(sectionId);
    
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };
    
 
    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSubDropdownToggle = () => {
        setSubDropdownOpen(!subDropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid">
                <div className='mx-md-5'>
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" className='w-75 h-50'/>
                </Link>
                </div>
                <button
                className={`navbar-toggler bg-light box ${isOpen ? '' : 'collapsed'}`}
                onClick={handleToggle}
                type="button"
                aria-controls="navbarNavDropdown"
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-label="Toggle navigation"
            >
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center gap-4">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active"  onClick={handleNavItemClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/aboutus" className="nav-link" activeClassName="active"  onClick={handleNavItemClick}>About Us</NavLink>
                        </li>
                        <li
                            className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}
                            onMouseEnter={handleDropdownToggle}
                            onMouseLeave={handleDropdownToggle}
                        >
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                            >
                                Our Services
                            </a>
                            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/action1" onClick={handleNavItemClick}>Business Development</NavLink>
                                <NavLink className="dropdown-item" to="/action2" onClick={handleNavItemClick}>Business Collaboration</NavLink>
                                <div
                                    className={`dropdown-submenu ${subDropdownOpen ? 'show' : ''}`}
                                    onMouseEnter={handleSubDropdownToggle}
                                    onMouseLeave={handleSubDropdownToggle}
                                >
                                    <a className="dropdown-item dropdown-toggle" href="#">Digital Marketing</a>
                                    <div className={`dropdown-menu ${subDropdownOpen ? 'show' : ''}`}>
                                        <NavLink className="dropdown-item" to="/seo-site">SEO</NavLink>
                                        <NavLink className="dropdown-item" to="/social-media">Social Media</NavLink>
                                        <NavLink className="dropdown-item" to="/google-ads">Google Ads</NavLink>
                                        <HashLink className="dropdown-item" to="/email-marketing">Email Marketing</HashLink>
                                        <HashLink className="dropdown-item" to="/ourservice#ppc" onClick={() => handleNavItemClick('ppcCampaign')}>PPC Campaign</HashLink>
                                        <NavLink className="dropdown-item" to="/whatsapp-marketing">Whatsapp Marketing</NavLink>
                                    </div>
                                </div>
                                <NavLink className="dropdown-item" to="/action3" onClick={handleNavItemClick}>Web Development</NavLink>
                                <NavLink className="dropdown-item" to="/action4" onClick={handleNavItemClick}>App Development</NavLink>
                                <NavLink className="dropdown-item" to="/action6" onClick={handleNavItemClick}>Website Design Service</NavLink>
                                <NavLink className="dropdown-item" to="/action7" onClick={handleNavItemClick}>Digital Marketing Service</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/learnwithus" className="nav-link" activeClassName="active"  onClick={handleNavItemClick}>Learn With Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/career" className="nav-link" activeClassName="active"  onClick={handleNavItemClick}>Career</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactus" className="nav-link" activeClassName="active"  onClick={handleNavItemClick}>
                                <button className='button-85 fw-bold'>
                                    Contact Us
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
