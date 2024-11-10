import React from 'react';
// import './about.css';

export const About = () => {
  return (
    <>
      <main>
        {/* Swiper Section */}
        <section className="swiper">
          <div className="swiper-wrapper">
            {['img1.jpg', 'image2.jpg', 'image3.jpg'].map((image, index) => (
              <div className="swiper-slide" key={index}>
                <img src={`main-images/${image}`} alt="Travel Slide" />
                <div className="img-overlay">
                  <p>Let's Travel The World With Us</p>
                  <h2>Discover The World With Our Guide</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="about-container">
          <div className="about-content">
            <p className="heading-1">THE BEST MUSIC APP</p>
            <h2 className="heading-2">
              Explore the <span>Globe</span> with Our Experts
            </h2>
            <p>
              At EchoBeat, we believe that music is more than just sound—it's an experience. Our music player is
              designed to provide you with seamless, efficient, and personalized music enjoyment. Whether you're
              creating playlists, discovering new artists, or managing your library, EchoBeat offers a smooth and
              intuitive interface, all powered by advanced Data Structures and Algorithms (DSA).
            </p>
            <p>Launching Great Singers to showcase the world their talent | Stream Music Now</p>
            <p>Contact us: +876 574 8934 | +983 749 3930</p>
          </div>
        </section>

        {/* Key Features */}
        <section className="main row mt-5">
          <div className="col-md-8 offset-2 mb-5 uppermain">
            <h2>Explore EchoBeat's Key Features:</h2>
            <ul>
              <li>
                Effortless Search and Sorting: Quickly find your favorite tracks, artists, and albums with our
                optimized search algorithms.
              </li>
              <li>
                Smart Playlist Creation: Automatically generate playlists tailored to your mood and preferences,
                thanks to our intelligent playlist management system.
              </li>
              <li>
                Discover Emerging Artists: EchoBeat helps you connect with new and independent artists, giving them
                a platform to showcase their talent and expand their reach.
              </li>
              <li>
                Seamless User Experience: Built with performance in mind, EchoBeat ensures fast load times, minimal
                delays, and a clean, user-friendly interface.
              </li>
            </ul>
          </div>
        </section>

        {/* Destination Cards Section */}
        <section id="place-choice">
          <div className="container-2">
            <p className="heading-1">CHOOSE YOUR SONG</p>
            <h2 className="heading-2">Popular <span>MUSIC</span> ONLY FOR YOU</h2>
            <div className="choice-wrapper">
              {[
                { title: 'Maldives Tour', price: '₹ 1,60,000', img: 'maldives.jpg' },
                { title: 'UK Tour', price: '₹ 1,55,000', img: 'uk.jpg' },
              ].map((destination, idx) => (
                <div className="tour-card" key={idx}>
                  <img src={`images/${destination.img}`} alt={destination.title} />
                  <div className="img-content">
                    <h2>{destination.title}</h2>
                    <p>{destination.price} / person</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer>
          <div className="f-info">
            <div className="f-info-socials">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="f-info-brand"> &copy; Wanderlust Pvt Limited</div>
            <div className="f-info-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </footer>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
      </main>
    </>
  );
};
