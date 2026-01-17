import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  return (
    <div className="contact-container">
      <h1>Contactez-moi</h1>
      <form
        action="https://formspree.io/f/mreeernj"  /* <-- mets ton endpoint Formspree ici */
        method="POST"
        className="contact-form"
      >
        <label>
          Nom
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Envoyer</button>
      </form>
      <p style={{ marginTop: "15px", color: "green" }}>{status}</p>
    </div>
  );
}
