import React, { useState, useRef  } from 'react';
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
    <div className='background'>
      <div className="contact-form">
        <div className="contact-form-image">
          <h2>GET IN TOUCH</h2>
          <p className=''>Send us your consult. We will reply you back as soon as possible</p>
        </div>
        <div className="contact-form-content">
          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-xl ">
            <div className="mb-4">
              <label htmlFor="user_name" className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="user_email" className="block text-gray-700 font-semibold">E-mail</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Your E-mail"
                required
                autoComplete="off"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>

            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Send</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
