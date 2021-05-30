import React from 'react';
import contact from '../../images/joanna-kosinska-1_CMoFsPfso-unsplash.jpg';
import Bounce from 'react-reveal/Bounce';
import './Contact.css';

const Contact = () => {
    return (
        <section className="container mt-5 pt-3">
            <h4 style={{fontFamily:'Quicksand',textAlign:'Center' , fontSize:'35px'}} className="mb-5">Contact Us</h4>
            <div className="row w-100">
                
                <div className="col-md-6 offset-md-1 mt-3">
                <Bounce left>    <form action="#" method="post" id="contact_form">
                        <div class="name">
                            <label for="name"></label>
                            <input type="text" placeholder="My name is" name="name" id="name_input" required />
                        </div>
                        <div class="name">
                            <label for="email"></label>
                            <input type="email" placeholder="My e-mail is" name="email" id="email_input" required />
                        </div>
                        <div class="telephone">
                            <label for="name"></label>
                            <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required />
                        </div>
                        <div class="subject">
                            <label for="subject"></label>
                            <select placeholder="Subject line" name="subject" id="subject_input" required>
                                <option disabled hidden selected>Subject line</option>
                                <option>I'd like to talk about you Product</option>
                                <option>I'd like to ask a question</option>
                                <option>I'd like to make a proposal</option>
                            </select>
                        </div>
                        <div class="message">
                            <label for="message"></label>
                            <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
                        </div>
                        <div class="submit">
                            <input type="submit" value="Send Message" id="form_button" />
                        </div>
                    </form>
                    </Bounce>
                </div>
                <Bounce right><div className="col-md-5">
                    <img style={{ height: "600px", width: "400px"}} src={contact} alt="" />
                </div>
                </Bounce>
            </div>
        </section>
    );
};

export default Contact;