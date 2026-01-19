import "./menu.css";

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu-container">
        <h2>Our Menu</h2>
        <p className="menu-subtitle">
          Discover our delicious selection of coffee and pastries.
        </p>

        <div className="menu-items">
          <div className="menu-item">
            <h3>Espresso</h3>
            <p>Rich and bold espresso shot.</p>
            <span>₹ 150 + Taxes</span>
          </div>

          <div className="menu-item">
            <h3>Cappuccino</h3>
            <p>Creamy cappuccino with frothy milk.</p>
            <span>₹ 200 + Taxes</span>
          </div>

          <div className="menu-item">
            <h3>Latte</h3>
            <p>Smooth latte with a touch of sweetness.</p>
            <span>₹ 249 + Taxes</span>
          </div>

          <div className="menu-item">
            <h3>Mocha</h3>
            <p>Chocolate-infused coffee delight.</p>
            <span>₹ 270 + Taxes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
