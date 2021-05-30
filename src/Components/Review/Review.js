import React from 'react';
import picture from '../../images/istockphoto-1045886560-612x612.jpg';

const Review = () => {
    return (
        <section>
        <div  className="container mt-5 text-center">
            <h3 style={{fontFamily: 'Quicksand', fontWeight: '700', fontSize:'35px'}} className="mb-5">Reviews</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4 w-100">
                <div class="col">
                    <div class="card h-80 w-80">
                        <img src={picture} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">John Doe</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus optio earum maxime modi enim magni beatae nam eum. Inventore.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-80 w-80">
                        <img src={picture} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Jonathon Trait</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus optio earum maxime modi enim magni beatae nam eum. Inventore.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-80 w-80">
                        <img src={picture} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Steven Hull</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus optio earum maxime modi enim magni beatae nam eum. Inventore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Review;