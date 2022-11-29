import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const TestimonialPostTemplate = ({
  content,
  contentComponent,
  description,
  name,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            <div style={{ marginTop: `4rem` }}>
              <h4>{name}</h4>
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
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        name={post.frontmatter.name}
        title={post.frontmatter.title}
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
      }
    }
  }
`;
