import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../Assests/Navbar/logo.png";
import './Navbar.css';
const NavbarComponent = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleNavItemClick = () => {
        setIsOpen(false);
    };
    return ( 
        <nav className="navbar navbar-expand-lg bg-dark  fixed-top">
            <div className="container-fluid">
                <img src={logo} alt="logo" className="mx-md-5" style={{ width: '160px', height: '83.85px' }} />
                <button
                    className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
                    onClick={handleToggle}
                    type="button"
                    aria-controls="navbarNavDropdown"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-white hover mx-3" activeClassName="active" aria-current="page" onClick={handleNavItemClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/aboutus" className="nav-link text-white hover mx-3" activeClassName="active" aria-current="page" onClick={handleNavItemClick}>About Us</NavLink>
                        </li>
                        <li
                            className={`nav-item hover dropdown ${dropdownOpen ? 'show' : ''}`}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <a
                                className="nav-link hover dropdown-toggle mx-3 text-white"
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
                                <NavLink className="dropdown-item" to="/action3" onClick={handleNavItemClick}>Web Development</NavLink>
                                <NavLink className="dropdown-item" to="/action4" onClick={handleNavItemClick}>App Development</NavLink>
                                <NavLink className="dropdown-item" to="/action5" onClick={handleNavItemClick}>Digital Marketing</NavLink>
                                <NavLink className="dropdown-item" to="/action6" onClick={handleNavItemClick}>Website Design Service</NavLink>
                                <NavLink className="dropdown-item" to="/action7" onClick={handleNavItemClick}>Digital Marketing Service</NavLink>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/learnwithus" className="nav-link text-white hover mx-3" activeClassName="active" aria-current="page" onClick={handleNavItemClick}>Learn With Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/career" className="nav-link hover text-white mx-3" activeClassName="active" aria-current="page" onClick={handleNavItemClick}>Career</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactus" className="nav-link hover text-white mx-3" activeClassName="active" aria-current="page" onClick={handleNavItemClick}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavbarComponent;