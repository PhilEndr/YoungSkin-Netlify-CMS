import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

import '../templates/template.sass';

const Value = ({ gridItems, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return(
    <div>
      {gridItems.map((item) => (
        <div key={item.title}>
          <section style={{marginBottom: "5rem"}}>
            <h1 className="new-title" style={{fontSize: "xx-large"}}>{item.title}</h1>
            {item.body ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                ) : null}

            {/*<PageContent className="description" content={item.body} contentComponent={HTMLContent}/>
            <p className="feature-text" style={{marginBottom: "1em"}}>{item.body}</p>*/}
            <PreviewCompatibleImage imageInfo={item} />
          </section>
        </div>
      ))}
    </div>
  );
};

Value.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      body: PropTypes.string,
      contentComponent: PropTypes.func,
    })
  ),
};

export default Value;
