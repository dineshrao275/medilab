import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Topbar />
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><Link to="/">Medilab</Link></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto " to="/" >Home</Link></li>
                            <li><Link className="nav-link scrollto" to="/about">About</Link></li>
                            <li><Link className="nav-link scrollto" to="doctors">Doctors and Department</Link></li>
                             <li><Link className="nav-link scrollto" to="service">Services</Link></li>
                             <li><Link className="nav-link scrollto" to="gallery">Gallery</Link></li>                          
                            <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
                            {/*<li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a> */}


                            {/* <li><Link className="nav-link scrollto" href="/contact">Contact</Link></li> */}
                            
                        </ul>
                       
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <Link to="/appointment" class="appointment-btn text-light"><span class="d-none d-md-inline">Make an</span> Appointment</Link>
                </div>
            </header>
        </>
    );
}
export default Header;