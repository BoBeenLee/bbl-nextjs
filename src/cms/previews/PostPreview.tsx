import React from "react";
import PostTemplate from "src/templates/post";

const PostPreview = ({ entry, widgetFor }: any) => {
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
  return <PostTemplate data={data} location={window.location as any} />;
};
