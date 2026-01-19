import "./menu.css";

export default function Menu() {
  return (
    <section className="menu">
      <h1>Our Menu</h1>
      <p>Handcrafted coffee made with love</p>

      <div className="menu-grid">
        <div className="menu-card">
          <img src="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a" />
          <h3>Espresso</h3>
          <span>$2.99</span>
          <button>Order Now</button>
        </div>

        <div className="menu-card">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" />
          <h3>Cappuccino</h3>
          <span>$3.99</span>
          <button>Order Now</button>
        </div>

        <div className="menu-card">
          <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772" />
          <h3>Caramel Macchiato</h3>
          <span>$4.99</span>
          <button>Order Now</button>
        </div>
      </div>
    </section>
  );
}
