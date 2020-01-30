import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

interface ISEOProps {
  description?: string;
  lang: string;
  meta: any[];
  title?: string;
}

function SEO({ description, lang, meta, title }: ISEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            keywords
            description
            site_url
          }
        }
      }
    `
  );
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = site.siteMetadata.site_url;
  const keywords = site.siteMetadata.keywords;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      titleTemplate={`%s`}
    >
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content="BoBeenLee" />
      <meta property="og:description" content={metaDescription} />
      <meta name="keywords" content={keywords.split(",")} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content="BoBeenLee" />
    </Helmet>
  );
}

SEO.defaultProps = {
  keywords: [],
  lang: `en`,
  meta: []
};

export default SEO;
