import "./Style.scss";

export const Banner = () => {
  return (
    <section className="section homepage-hero">
      <div className="Grid">
        <div className="Grid__Cell 1/2--desk">
          <div className="homepage-hero-content">
            <h1 className="heading--jumbo Text--highlight">
              The easiest way to sell online in India
            </h1>
            <p className="heading--subhead  Text--subdued u-h2">
              Try one of the most powerful platforms on the market for free.
              <br /> No technical knowledge needed.
            </p>
          </div>
        </div>
      </div>
      <div className="homepage-hero-image">
        <img
          className="image"
          sizes="100vw"
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/in-hero-product-small-0c64c4c1013fc8ac477cb5ff62bf5b56b2903aec697e6b708b90d3b65a09baf8.jpg"
          alt="India product imagery with mobile view"
        />
      </div>
    </section>
  );
};
