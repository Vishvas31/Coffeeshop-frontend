import "./specialmenu.css";

export default function SpecialMenu() {
  return (
    <section className="special">
      <div className="text">
        <h3>Morning Happy –</h3>
        <p className="para">
          Start your day with freshly brewed perfection.  
          Our handcrafted coffees are made with love,  
          passion, and the finest beans you deserve.

        </p>

        <div className="btns">
          <button className="dark">Discover Specials</button>
          <button className="light">Visit Today</button>
        </div>
      </div>

      <div className="rightbox">

      <h3 className="visit">Visit Us TODAY</h3>

      <div className="cards">

        <div className="card">
          <img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13" />
          <h4>Caramel Latte</h4>
          <p>Rich espresso with silky caramel</p>
<span className="price-badge">₹ 350 + Taxes</span>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" />
          <h4>Chocolate Mocha</h4>
          <p>Creamy mocha with cocoa powder</p>
          <span className="price-badge">₹ 290 + Taxes</span>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348" />
          <h4>Flat White</h4>
          <p>Smooth and perfectly balanced</p>
          <span className="price-badge">₹220 + Taxes</span>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" />
          <h4>Cappuccino</h4>
          <p>Classic foam-topped delight</p>
          <span className="price-badge">₹149 + Taxes</span>
        </div>

        </div>

      </div>
    </section>
  );
}
