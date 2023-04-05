import React from 'react'

const WowEffect = () => {
  return (
    <div className="wow__effect">
    <h1>
      Everything you need <br />
      for that <span></span> effect
    </h1>
    <div className="wow__designs">
      <div className="wow__cards">
        <img
          src="https://overflow.io/assets/public-site-v2/images/card-image-07.webp?v=1680461635535"
          alt="cards"
        />
      </div>
      <div className="wow__cards">
        <img
          src="https://overflow.io/assets/public-site-v2/images/card-image-08.webp?v=1680461635535"
          alt="cards"
        />
      </div>
      <div className="wow__cards">
        <img
          src="https://overflow.io/assets/public-site-v2/images/card-image-10.webp?v=1680461635535"
          alt="cards"
        />
      </div>
    </div>
    <div className="wow__button">
      <button>
        Explore All Features <i className="fa fa-arrow-right"></i>
      </button>
    </div>
    <div className="details__wrapper">
      <div className="products__details">
        <h4>Products</h4>
        <ul>
          <li>How it works</li>
          <li>Features</li>
          <li>Integrations</li>
          <li>Overflow</li>
          <li>Start for free</li>
        </ul>
      </div>
      <div className="products__details">
        <h4>Products</h4>
        <ul>
          <li>How it works</li>
          <li>Features</li>
          <li>Integrations</li>
          <li>Overflow</li>
          <li>Start for free</li>
        </ul>
      </div>
      <div className="products__details">
        <h4>Products</h4>
        <ul>
          <li>How it works</li>
          <li>Features</li>
          <li>Integrations</li>
          <li>Overflow</li>
          <li>Start for free</li>
        </ul>
      </div>
      <div className="products__details">
        <img
          src="https://overflow.io/assets/public-site-v2/images/logo.svg?v=1680461635535"
          alt="logo"
        />
        <p>
          Get the latest news about Overflow’s new features & product
          updates.
        </p>
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-spotify"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WowEffect