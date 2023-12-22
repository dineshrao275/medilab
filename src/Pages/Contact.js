import React, { useState } from "react";
import axios from "axios";
import jquery from "jquery";
import jqueryValidate from "jquery-validation";
import toastr from "toastr";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // for validation in contact form 
    jquery("#contactForm").validate({
        rules: {
            'name': 'required',
            'email': { required: true, email: true },
            'subject': 'required',
            'message': 'required'
        },
        submitHandler: () => {
            var data = {
                name,
                email,
                subject,
                message
            };
            console.log(data);
            axios.post('http://localhost:3003/contact-form', data)
                .then(response => {
                    console.log("Form submitted successfully", response);
                })
                .catch(error => {
                    console.error("Error submitting form", error);
                });
        }
    });


    return (
        <>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                </div>


                <div className="container">
                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form className="php-email-form" id="contactForm">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required></textarea>
                                </div>
                                <div className="text-center"><button type="submit" >Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Contact;