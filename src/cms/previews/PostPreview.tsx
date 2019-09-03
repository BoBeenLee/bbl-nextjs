import React from "react";
import PostTemplate from "../../templates/post";
// import '../../layouts/styles';

// tslint:disable:object-literal-sort-keys
const PostPreview = ({ entry, widgetFor }) => {
  const data = {
    markdownRemark: {
      html: widgetFor("body"),
      fields: {
        slug: "/"
      },
      frontmatter: {
        title: entry.getIn(["data", "title"])
      }
    }
  };
  return <PostTemplate data={data} />;
};
