import React from "react";
import "../assets/styles/superpower.css";
import creativity from "../assets/images/creativity.jpg";
const BodyAfterVideo = () => {
  const companyLogo = [
    "https://overflow.io/assets/public-site-v2/images/customers/amazon.svg?v=1680461635535",
    "https://overflow.io/assets/public-site-v2/images/customers/netflix.svg?v=1680461635535",
    "https://overflow.io/assets/public-site-v2/images/customers/spotify.svg?v=1680461635535",
    "https://overflow.io/assets/public-site-v2/images/customers/microsoft.svg?v=1680461635535",
    "https://overflow.io/assets/public-site-v2/images/customers/facebook.svg?v=1680461635535",
  ];
  function overlay() {
    document.getElementById("superpower__text").style.display = "block";
    document.getElementById("superpower__card").style.display = "none";
  }
  function overlayRemove() {
    document.getElementById("superpower__text").style.display = "none";
    document.getElementById("superpower__card").style.display = "block";
  }
  return (
    <div class="bodyaftervideo">
      <div class="companies_logo">
        <div class="companyname">
          {companyLogo.map((item) => {
            return <img src={item} />;
          })}
        </div>
        <div class="companyexplain">
          <span>
            Trusted by more than 500,000 designers and product managers across
            the globe
          </span>
        </div>
      </div>
      <div class="design__story">
        <h1>One design story.</h1>
        <h1>Three ways to tell it.</h1>
      </div>
      <div class="viewbutton">
        <button>Canvas view</button>
        <button>Prototype view</button>
        <button>Story presentation</button>
      </div>
      <div class="button__video">
        <video autoplay>
          <source
            src="https://overflow.io/upload/o/public/home/home-atf-v3-2022.mp4?v=1680461635535"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="story__view">
        <h3>Story view</h3>
        <p>
          Create interactive, self-guided design walkthroughs and allow your
          <br />
          audience to follow your presentation at their own pace. Get
          <br />
          feedback without long emails and unnecessary meetings.
        </p>
      </div>
      <div class="creativity">
        <h1>Save time for creativity</h1>
        <p>
          Creating and updating user flows or design presentations takes
          <br />
          considerable time. Overflow allows you to <br />
          spend less time on tedious tasks and focus on improving
          <br />
          your work and creating stunning presentations.
        </p>
      </div>
      <div class="videoandparagraph">
        <div class="imageparagraph">
          <img src={creativity} alt="creativity" />
        </div>
        <div class="paragraph">
          <h3>Sync from any design tool</h3>
          <p>
            Bring your designs into Overflow from your favorite design tool in
            seconds. Use them as a base to create beautiful user flows and
            design presentations in minutes. Simply re-sync after each design
            iteration cycle to keep your presentation up to speed.
          </p>
        </div>
      </div>
      <div class="tell__design__story">
        <h1>Tell your design story</h1>
        <h1 id="downheading">like never before</h1>
        <p>Create interactive, step-by-step design</p>
        <p>walkthroughs and become a master storyteller.</p>
        <button>
          Discover Overflow Stories <i class="fa fa-arrow-right"></i>
        </button>
      </div>
      <div class="discover__superpower">
        <h1>Discover your</h1>
        <h1>new superpowers</h1>
        <div class="superpower__cards__wrapper">
          <div
            class="superpower__card"
            id="superpower__card"
            onMouseOver={overlay}
          >
            <h4>Present without being there</h4>
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-01.png?v=1680461635535"
              alt="image"
            />
          </div>
          <div
            class="superpower__text"
            id="superpower__text"
            onMouseLeave={overlayRemove}
          >
            <h4>Present without being there</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              quod molestias possimus quos, laborum quia corporis ratione
              accusantium, autem dolore officia quibusdam cum corrupti magnam
              eum saepe illum accusamus praesentium.
            </p>
          </div>
          <div class="superpower__card">
            <h4>Present without being there</h4>
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-02.png?v=1680461635535"
              alt="image"
            />
          </div>

          <div class="superpower__card">
            <h4>Present without being there</h4>
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-03.png?v=1680461635535"
              alt="image"
            />
          </div>
          <div class="superpower__card">
            <h4>Present without being there</h4>
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-04.png?v=1680461635535"
              alt="image"
            />
          </div>
          <div class="superpower__card">
            <h4>Present without being there</h4>
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-05.png?v=1680461635535"
              alt="image"
            />
          </div>
          <div class="superpower__card">
            <h4>Present without being there</h4>
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-06.png?v=1680461635535"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div class="webdesigner__saying">
        <div class="webdesigner">
          <h4>What Designers and</h4>
          <h4>product managers like</h4>
          <h4>you have to say</h4>
        </div>
        <div class="designer__image">
          <img
            src="https://overflow.io/assets/public-site-v2/images/decorations/decor-pencil.png?v=1680461635535"
            alt=""
          />
        </div>
      </div>
      <div class="webdesigner__words">
        <div class="webdesigner__photo">
          <img
            src="https://overflow.io/assets/public-site-v2/images/avatars/testimonial-avatar06@2x.webp"
            alt="photo"
          />
        </div>
        <div class="webdesigner__purewords">
          <h4>
            "It's great for mapping complex products or features. Highly
            customisable and extremely easy to use as well."
          </h4>
          <h5>Random Nepali</h5>
          <p>Lead Product Designer</p>
        </div>
      </div>
      <div class="wow__effect">
        <h1>
          Everything you need <br />
          for that <span></span> effect
        </h1>
        <div class="wow__designs">
          <div class="wow__cards">
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-07.webp?v=1680461635535"
              alt="cards"
            />
          </div>
          <div class="wow__cards">
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-08.webp?v=1680461635535"
              alt="cards"
            />
          </div>
          <div class="wow__cards">
            <img
              src="https://overflow.io/assets/public-site-v2/images/card-image-10.webp?v=1680461635535"
              alt="cards"
            />
          </div>
        </div>
        <div class="wow__button">
          <button>
            Explore All Features <i class="fa fa-arrow-right"></i>
          </button>
        </div>
        <div class="details__wrapper">
          <div class="products__details">
            <h4>Products</h4>
            <ul>
              <li>How it works</li>
              <li>Features</li>
              <li>Integrations</li>
              <li>Overflow</li>
              <li>Start for free</li>
            </ul>
          </div>
          <div class="products__details">
            <h4>Products</h4>
            <ul>
              <li>How it works</li>
              <li>Features</li>
              <li>Integrations</li>
              <li>Overflow</li>
              <li>Start for free</li>
            </ul>
          </div>
          <div class="products__details">
            <h4>Products</h4>
            <ul>
              <li>How it works</li>
              <li>Features</li>
              <li>Integrations</li>
              <li>Overflow</li>
              <li>Start for free</li>
            </ul>
          </div>
          <div class="products__details">
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
            <div class="icons">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-spotify"></i>
              <i class="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAfterVideo;
