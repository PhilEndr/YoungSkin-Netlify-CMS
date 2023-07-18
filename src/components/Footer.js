import * as React from "react";
import { Link } from "gatsby";
import SocialMedia from "./SocialMedia";

import logo from "../img/YS final-02.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter has-background-pantone-555-c">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Younger Skin"
            style={{ width: "30em" }}
          />
        </div>
        <div className="content has-text-centered has-text-white-ter has-background-pantone-555-c">
          <div className="container has-text-white-ter has-background-pantone-555-c">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Our Values
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/testimonials">
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
