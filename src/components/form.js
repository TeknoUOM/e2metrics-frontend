import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./form.css";




const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validateEmail = (email) => {
    // Email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    emailjs
      .sendForm(
        "service_wge8zbh",
        "template_s8iimlf",
        e.target,
        "5DIBwuVaW7P2x_q0i"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message was sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Sorry, an error occurred while sending your message. Please try again later."
          );
        }
      );
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };
  
  return (
    
    <div className="container-box">
      
    <form onSubmit={handleSubmit} className="form">
      
    <div className="form-header">
    <h1>Contact us</h1></div>
    
      <label>
        <b>Name:</b>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
       <b>Phone Number:</b> 
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <b>Email:</b>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <b>Message:</b>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit"><b>SUBMIT</b></button>
  
    </form>
    </div>
    
    
   
  );

  
};


export default Form;