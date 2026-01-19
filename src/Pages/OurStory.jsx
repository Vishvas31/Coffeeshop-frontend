import "./ourstory.css";

export default function OurStory() {
  return (
    <section className="story-page">

      {/* Header */}
      <div className="story-header">
        <h1>Our Story</h1>
        <p>
          Every cup has a story. Ours is brewed with passion, patience,
          and purpose.
        </p>
      </div>

      {/* Section 1 */}
      <div className="story-section">
        <div className="image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Coffee shop"
          />
        </div>

        <div>
          <h2>Where It All Began</h2>
          <p>
            Our journey started with a simple dream — to create a place where
            people could slow down and enjoy truly great coffee.
          </p>
          <p>
            What began as a small passion project grew into a café built on
            craftsmanship, quality, and community.
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="story-quote">
        <p>
          “Great coffee isn’t just about taste — it’s about the moments it
          creates.”
        </p>
      </div>

      {/* Section 2 */}
      <div className="story-section reverse">
        <div className="image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="Coffee brewing"
          />
        </div>

        <div>
          <h2>Crafted With Care</h2>
          <p>
            From sourcing premium beans to mastering brewing techniques,
            every step is handled with care and intention.
          </p>
          <p>
            Our baristas believe each cup should be as memorable as the last.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="story-values">
        <h2>What We Stand For</h2>

        <div className="values-grid">
          <div>
            <span>☕</span>
            <h3>Quality</h3>
            <p>Only the finest beans, brewed to perfection.</p>
          </div>

          <div>
            <span>🤝</span>
            <h3>Connection</h3>
            <p>A space where people come together and feel at home.</p>
          </div>

          <div>
            <span>🌱</span>
            <h3>Sustainability</h3>
            <p>Ethical sourcing with care for the planet.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="story-cta">
        <h2>This Is Just the Beginning</h2>
        <p>
          As we grow, our commitment remains the same — to serve exceptional
          coffee and create meaningful experiences.
        </p>
        <button>Visit Our Café</button>
      </div>

    </section>
  );
}
