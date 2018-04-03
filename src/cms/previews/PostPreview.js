import React from 'react';
import PostTemplate from '../../templates/post';
// import '../../layouts/styles';

const PostPreview = ({ entry, widgetFor }) => {
  const data = {
    markdownRemark: {
      html: widgetFor('body'),
      fields: {
        slug: '/',
      },
      frontmatter: {
        title: entry.getIn(['data', 'title']),
      },
    },
  };
  console.log(data);
  return <PostTemplate data={data} />;
};
