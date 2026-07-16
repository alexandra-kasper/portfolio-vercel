"use client";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykqbpqy";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your name" required disabled={status === "sending"} />
      <input type="email" name="email" placeholder="Your email address" required disabled={status === "sending"} />
      <textarea name="message" placeholder="What's on your mind?" required disabled={status === "sending"} />
      <button type="submit" className="contact-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "success" && <p className="form-status success">Message sent - I'll be in touch soon.</p>}
      {status === "error" && <p className="form-status error">Something went wrong. Try emailing me directly at alexandra.i.kasper@gmail.com</p>}
    </form>
  );
}
