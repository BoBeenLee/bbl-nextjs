/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  setHeadComponents(
    <script
      key="feednami"
      src="https://static.sekandocdn.net/static/feednami/feednami-client-v1.1.js"
    />
  );
};
