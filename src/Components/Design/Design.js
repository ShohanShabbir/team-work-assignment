import React from 'react';
import image from '../../images/baseball-tee-removebg-preview.png';
import image1 from '../../images/long-sleeve-removebg-preview.png';
import image2 from '../../images/pullover-hoodie-removebg-preview.png';
import image3 from '../../images/unisex-vneck-removebg-preview.png';
import './Design.css';

const Design = () => {
    return (
        <div className="mt-5 design" style={{fontFamily:'Quicksand',fontWeight:'700'}}>
            <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-7 mt-5">
                    <h3>Choose the custom apparel you <br /> want to Buy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non doloribus quae provident nulla ipsa magni iure quia nihil vel aliquid perspiciatis odio labore nemo sed, unde consectetur ea fugit?</p>
                    <button className="btn btn-success">Choose Yours</button>
                </div>
                <div className="col-md-5">
                    <div id="carouselExampleControls" class="carousel slide bg-transparent" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={image} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Design;