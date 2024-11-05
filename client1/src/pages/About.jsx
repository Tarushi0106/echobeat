import React from 'react';

export const About = () => {
  return (
    <>
      
      

      <div className="main row mt-5">
        <div className="col-md-8 offset-2 mb-5 uppermain">
          <h2>Welcome to EchoBeat: Your Personalized Music Experience</h2>
          <p>
            At EchoBeat, we believe that music is more than just sound—it's an experience. Our music player is
            designed to provide you with seamless, efficient, and personalized music enjoyment. Whether you're
            creating playlists, discovering new artists, or managing your library, EchoBeat offers a smooth and
            intuitive interface, all powered by advanced Data Structures and Algorithms (DSA).
          </p>
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

        <div className="main2 row">
          <div className="main2-1 col-md-8 offset-1 box1">
            <h2>About EchoBeat</h2>
            <p>
              EchoBeat is a next-generation music player developed by combining advanced Data Structures and
              Algorithms to optimize performance and user experience. From managing music libraries to creating
              dynamic playlists, EchoBeat is built for users who demand efficiency and simplicity. The platform
              goes beyond playing music by helping independent artists connect with new listeners, fostering a
              growing community of emerging talent.
            </p>
          </div>
          <div className="main2-1">
            <h3>What sets EchoBeat apart:</h3>
            <ul>
              <li>Fast, intuitive music management using cutting-edge technology.</li>
              <li>A platform for emerging artists to showcase their work and reach new audiences.</li>
              <li>Personalized music recommendations based on your unique listening habits.</li>
            </ul>
          </div>
        </div>
      </div>

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
    </>
  );
};