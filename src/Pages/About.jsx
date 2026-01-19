import "./about.css";

export default function About() {
  return (
    <section className="about">
      <h1>About Us</h1>
      <p className="subtitle">
        Brewing happiness, one cup at a time.
      </p>

      <div className="story">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" height="300px" />
        <div>
          <h2>Our Story</h2>
          <p>
            Our journey began with a simple idea — to serve high-quality coffee
            made with passion and care.
          </p>
        </div>
      </div>

      <div className="values">
        <div>
          <span>☕</span>
          <h3>Premium Beans</h3>
        </div>
        <div>
          <span>❤️</span>
          <h3>Made with Love</h3>
        </div>
        <div>
          <span>🌍</span>
          <h3>Community First</h3>
        </div>
      </div>
    </section>
  );
}
