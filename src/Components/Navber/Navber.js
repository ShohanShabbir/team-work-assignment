import React from 'react';
import './Navber.css'

const Navber = () => {
    return (
        <div className="container mb-2">
            <nav className="navbar navbar-expand-lg  nav-font">

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#">Our Product</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#">Review</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navber;