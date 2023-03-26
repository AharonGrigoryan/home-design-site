import { Link } from "gatsby";
import React from "react";

const Header = () => {
  return (
    <header data-thq="thq-navbar" className="home-navbar-interactive">
      <Link to="/">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="home-logo"
        />
      </Link>
      <div
        data-role="Nav"
        data-thq="thq-navbar-nav"
        className="home-desktop-menu"
      >
        <nav
          data-role="Nav"
          data-thq="thq-navbar-nav-links"
          className="home-nav"
        >
          <Link to="/about" className="home-text01">
            About
          </Link>
          <span className="home-text02">Features</span>
          <span className="home-text03">Pricing</span>
          <span className="home-text04">Team</span>
        </nav>
      </div>
      <div data-thq="thq-navbar-btn-group" className="home-btn-group">
        <button className="home-login button">Login</button>
        <button className="home-register button">Register</button>
      </div>
      <div data-thq="thq-burger-menu" className="home-burger-menu">
        <svg viewBox="0 0 1024 1024" className="home-icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" className="home-mobile-menu">
        <div
          data-role="Nav"
          data-thq="thq-mobile-menu-nav"
          className="home-nav1"
        >
          <div className="home-container1">
            <img
              alt="cards"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="home-image"
            />
            <div data-thq="thq-close-menu" className="home-menu-close">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <nav
            data-role="Nav"
            data-thq="thq-mobile-menu-nav-links"
            className="home-nav2"
          >
            <span className="home-text06">About</span>
            <span className="home-text07">About</span>
            <span className="home-text08">Features</span>
            <span className="home-text09">Pricing</span>
            <span className="home-text10">Team</span>
            <span className="home-text11">Blog</span>
          </nav>
          <div className="home-container2">
            <button className="home-login1 button">Login</button>
            <button className="button home-register1">Register</button>
          </div>
        </div>
        <div className="home-icon-group">
          <svg viewBox="0 0 1024 1024" className="home-icon04">
            <path
              d="M896 128q34 0 60 26t26  34-26 59t-60 25h-170v-84h170v-512h-768v512h170v84h-170q-34 0-60-25t-26-59v-512q0-34 26-60t60-26h768zM256 938l256-256 256 256h-512z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
