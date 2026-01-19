import "./features.css";

export default function Features() {
  return (
    <section className="features">
      <h2>Features</h2>

      <div className="features-grid">
        <div className="feature-box">
          <div className="icon">☕</div>
          <h3>Espresso</h3>
          <p>Rich and bold handcrafted espresso made from freshly roasted beans.</p>
        </div>

        <div className="feature-box">
          <div className="icon">☕</div>
          <h3>Latte</h3>
          <p>Smooth espresso balanced with steamed milk for a creamy delight.</p>
        </div>

        <div className="feature-box">
          <div className="icon">☕</div>
          <h3>Cappuccino</h3>
          <p>Aromatic espresso topped with silky foam and subtle sweetness.</p>
        </div>

        <div className="feature-box">
          <div className="icon">☕</div>
          <h3>Cold Brew</h3>
          <p>Slow-brewed coffee served chilled with deep, smooth flavor.</p>
        </div>
      </div>
    </section>
  );
}
