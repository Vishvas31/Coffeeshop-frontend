import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-parallax">
      <div className="contact-overlay">
        <h1>Get in Touch</h1>
        <p className="contact-subtitle">
          We’d love to hear from you. Whether it’s feedback, questions, or just
          a friendly hello ☕
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> contact@coffee.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Brew Street, Coffee City</p>
          <p><strong>Hours:</strong> Mon – Sun | 8:00 AM – 10:00 PM</p>
        </div>

        <button className="contact-btn">Send Message</button>
      </div>
    </section>
  );
};

export default Contact;
