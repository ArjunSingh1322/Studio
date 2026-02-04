import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ open, onClose }) => {

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) return; 

    setIsSending(true); 

    emailjs.sendForm(
      "service_0jdrn8h",
      "template_fjqmpwz",
      e.target,
      "dkBRtT-Clo4cfgLAR"
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
      onClose();
    })
    .catch(() => {
      alert("Failed to send message");
    })
    .finally(() => {
      // 🔓 unlock after 3 seconds
      setTimeout(() => {
        setIsSending(false);
      }, 3000);
    });
  };

  return (
    <div className={`contact-sidebar ${open ? "open" : ""}`}>
      <span className="close-btn" onClick={onClose}>×</span>

      <h2>Contact Us</h2>

      <form className="contact-form"      onSubmit={handleSubmit}>
        <input type="text" name="name"    placeholder="Your Name" required />
        <input type="number" name="phone" placeholder="Mobile Number" required />
        <textarea name="message" rows="4" placeholder="Your Message" required />

        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="studio-details">
        <p><strong>Studio:</strong> Moment Capture</p>
        <p><strong>Phone:</strong> 7056862965</p>
        <p><strong>Location:</strong> Near Railway Flyover Kaithal Road</p>
        <strong>KARNAL</strong>
      </div>
    </div>
  );
};

export default Contact;
