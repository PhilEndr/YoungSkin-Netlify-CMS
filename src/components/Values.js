import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import '../templates/template.sass';

const Value = ({ gridItems }) => (
  <div>
    {gridItems.map((item) => (
      <div key={item.body}>
        <section style={{marginBottom: "5rem"}}>
          <h1 className="new-title" style={{fontSize: "xx-large"}}>{item.title}</h1>
          <p className="feature-text" style={{marginBottom: "1em"}}>{item.body}</p>
          <PreviewCompatibleImage imageInfo={item.image} />
        </section>
      </div>
    ))}
  </div>
);

Value.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      body: PropTypes.string,
    })
  ),
};

export default Value;
