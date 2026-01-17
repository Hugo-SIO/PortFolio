import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState(""); // message de statut
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mreeernj", { // ton endpoint Formspree
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Message envoyé avec succès !");
        e.target.reset(); // réinitialise le formulaire
      } else {
        setStatus("❌ Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      setStatus("❌ Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contactez-moi</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
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

        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
