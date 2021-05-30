import React from 'react';
import './Navber.css';
import logo from '../../images/logo.png';

const Navber = () => {
    return (
        <div style={{backgroundColor: 'rgb(61,72,83,0.7)'}}>
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div class="container-fluid navbar-font">
                    <a class="navbar-brand" href="#"><img style={{height:'80px'}} src={logo} alt="" /></a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;