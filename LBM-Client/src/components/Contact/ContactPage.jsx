import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ContactPage.scss';

const ContactPage = () => {
    const form = useRef()
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_o8ckx7h', 'template_r8p0gnq', form.current, 'K3xhSEXO5y1bVyrXc')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                navigate('/support');
            }, (error) => {
                console.log(error.text);
                alert("Your message could not be sent. Please try again or email us at hello@libertum.io.")
            });
    };

    return (
        <div className='md:mt-36 md:-mb-96 lg:mt-0 lg:mb-0'>
            <div className="contact-form md:block lg:flex md:w-[80%] md:text-center ">
                <div className="text-center">
                    <h2>GET IN TOUCH</h2>
                    <p className=''>Send us your consult. We will reply you back as soon as possible</p>
                </div>
                <div className="contact-form-content lg:w-[50%]">
                    <form ref={form} onSubmit={sendEmail} className="mx-auto  bg-white p-4 rounded-xl shadow-xl">
                        <div className="">
                            <label htmlFor="user_name" className="block text-gray-700 font-md">Name</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="w-full px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                            />
                        </div>

                        <div className="">
                            <label htmlFor="user_email" className="block text-gray-700 font-md">E-mail</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                placeholder="Your E-mail"
                                required
                                autoComplete="off"
                                className="w-full px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                            />
                        </div>

                        <div className="">
                            <label htmlFor="message" className="block text-gray-700 font-md">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here"
                                required
                                className="w-full px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                            ></textarea>
                        </div>

                        <button type="submit" className="buttonSubmitForm text-white px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Send</button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default ContactPage;
