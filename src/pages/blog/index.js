import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4)), url('/img/xt4s4538.jpg')`,
            alignItems: "flex-end",
            backgroundPosition: "center",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              textShadow: "rgba(142, 152, 100, 0.5) 0.3rem 3px 0px",
              color: "white",
              padding: "1rem",
              marginBottom: "2rem",
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
