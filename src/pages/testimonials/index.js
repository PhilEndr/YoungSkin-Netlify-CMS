import * as React from "react";

import Layout from "../../components/Layout";
import TestimonialRoll from "../../components/TestimonialRoll";

export default class TestimonialIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/xt4s4538.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                "rgba(142, 152, 100, 0.3) 0.5rem 0px 0px, rgba(142, 152, 100, 0.3) -0.5rem 0px 0px",
              backgroundColor: "rgba(142, 152, 100, 0.3)",
              color: "white",
              padding: "1rem",
            }}
          >
            Testimonials
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <TestimonialRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}