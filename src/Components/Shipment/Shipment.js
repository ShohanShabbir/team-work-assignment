import React from 'react';
import logo from '../../images/logo.png';

const Shipment = () => {
    return (
        <div style={{marginTop:'100px'}} className="text-center">
            <h4 style={{fontFamily: 'Quicksand', fontSize:'20px', fontWeight:'bold'}}>SHIRTS ARE PRINTED & SHIPPED</h4>
            <p style={{fontFamily: 'Quicksand', fontSize:'24px'}}>Seat back and relax We take care of <br/> printing and shipping orders to <br/>  buyers anywhere across the world.</p>
            <img src={logo} alt="" />
        </div>
    );
};

export default Shipment;