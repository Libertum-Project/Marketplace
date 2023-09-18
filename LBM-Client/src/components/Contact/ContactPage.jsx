import React, { useState } from 'react';
import './ContactPage.scss';
import { motion } from "framer-motion";
import { Bounce, Flip } from "react-awesome-reveal";
import { FaHourglassEnd } from "react-icons/fa";
import { BsCheckAll } from "react-icons/bs";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Realiza la lógica de envío del formulario aquí
    const formElem = document.querySelector("form");
    const formData = new FormData(formElem);
    
    // Simula un tiempo de carga antes de establecer el éxito
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 500);
  };

  return (
    <div className='background'>
      <div className="contact-form">
        <div className="contact-form-image">
          <h2>GET IN TOUCH</h2>
          <p>Send us your consult. We will reply you back as soon as possible</p>
        </div>
        <div className="contact-form-content">
          {!success ? (
            !loading ? (
              <form onSubmit={handleFormSubmit} action="/tu-ruta-de-envío" method="POST" autoComplete="off">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Surname"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write here your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className='buttonSubmitForm'>Send</button>
              </form>
            ) : (
              <Flip style={{ marginTop: "0px" }}>
                <FaHourglassEnd size={28} color="gray" />
              </Flip>
            )
          ) : (
            <Bounce style={{ marginTop: "10px" }}>
              <BsCheckAll size={30} color="#26c502" />
              <h3 style={{ color: "#26c502", margin: "0px" }}>
                ¡Thanks for subscribe!
              </h3>
            </Bounce>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
