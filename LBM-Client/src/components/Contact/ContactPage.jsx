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
          <p>Send us your consult. We will reply you back as soon as possible</p>
        </div>
        <div className="contact-form-content">    
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Surname"
                    required
                    autoComplete="off"
                  />
                </div> */}
                <div className="form-group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="E-mail"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Write here your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" value="Send" className='buttonSubmitForm'>Send</button>
              </form>            
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
