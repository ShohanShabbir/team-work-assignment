import React from 'react';
import './MainSec.css';
import champion from '../../images/campaigns-hero-removebg-preview.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const MainSec = () => {
    return (
        <div className="headerSec">
            {/* <main style={{ height: '500px' }} className="  row d-flex align-items-center">
                <div className="col-md-8 offset-md-4">
                    <h1 style={{ color: 'black' }}>Your New Smile <br /> Starts Here</h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                    <button className="btn btn-warning">GET NOW</button>
                </div>
            </main> */}
            <main className="text-white">
                <div className="container">
                    <div className="row d-flex  align-items-center main">
                        <Fade left>
                            <div className="col-md-6 col-12">
                                <h3 style={{ fontFamily: 'Quicksand', fontWeight: '700', fontSize: '30px' }}>The easy way to design and sell <br /> t-shirts online</h3>
                                <h6 style={{ fontFamily: 'Quicksand', fontWeight: '700' }} className="mt-2">100% Cotton Great Fabrics</h6>
                                <Bounce left><button className="btn btn-outline-danger mt-3 text-white">Get Yours Now</button></Bounce>    
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-md-6 mt-3 col-12 image">
                                <img style={{ height: '400px' }} src={champion} alt="" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainSec;