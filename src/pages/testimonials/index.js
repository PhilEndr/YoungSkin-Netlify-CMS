import * as React from "react";

import Layout from "../../components/Layout";
import TestimonialRoll from "../../components/TestimonialRoll";
import { StaticImage } from "gatsby-plugin-image";

import '../../templates/template.sass';

export default class TestimonialIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="margin-top-0"
          style={{
            display: "grid",
            alignItems: "center",
          }}>
            <StaticImage
              src="../../img/logo_testimonials.jpg"
              objectFit="cover"
              objectPosition="center"
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                maxHeight: "35vh",
              }}
              layout="fullWidth"
              // You can optionally force an aspect ratio for the generated image
              aspectratio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
            />
              <h1
                className="new-title has-text-weight-bold is-size-1"
                style={{
                  // By using the same grid area for both, they are stacked on top of each other
                  gridArea: "1/1",
                  position: "relative",
                  // This centers the other elements inside the hero component
                  placeItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(160,216,179,0.2) 100%)",
                  height: "100%",
                }}
              >
                <span style={{
                  textShadow: "rgba(142, 152, 100, 0.5) 0.3rem 3px 0px",
                  color: "white",
                  lineHeight: "1",
                  padding: "1rem",
                  marginBottom: "2rem",}}
                >
                  Reviews
                </span>
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
