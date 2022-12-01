import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import './template.sass';

// eslint-disable-next-line
export const TestimonialPostTemplate = ({
  content,
  contentComponent,
  description,
  name,
  title,
  helmet,
  featuredimage,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
            {featuredimage ? (
              <div className="featured-thumbnail column is-4">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage,
                    alt: `featured image thumbnail for post ${title}`,
                    width:
                      featuredimage.childImageSharp
                        .gatsbyImageData.width,
                    height:
                      featuredimage.childImageSharp
                        .gatsbyImageData.height,
                  }}
                />
              </div>
            ) : null}
          <div className="column is-7">
            <h1 className="new-title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p className="description">{description}</p>
            <PostContent className="description" content={content} />
            <div className="new-subtitle" style={{ marginTop: `4rem` }}>
              <h4>&bull; {name}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object,
};

const TestimonialPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TestimonialPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Testimonial">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.title}`}
            />
          </Helmet>
        }
        name={post.frontmatter.name}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

TestimonialPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default TestimonialPost;

export const pageQuery = graphql`
  query TestimonialPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        name
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 360
              quality: 100
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;
