/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require("lodash");
const isProduction = process.env.GATSBY_ENV === "production";

const metadata = {
  description: "BoBeen Lee",
  keywords: "BoBeenLee, ReactJS, React Native, Javascript",
  og_image: "https://bbl.netlify.com/meta_img.png",
  site_url: "https://bbl.netlify.com",
  title: "BoBeen Lee",
  titleTemplate: "%s",
  backgroundColor: `#fff`,
  themeColor: `#5191FD`
};

const siteMetadataMap = _.cond([
  [_.matches({ isProduction: false }), _.constant(metadata)],
  [_.matches({ isProduction: true }), _.constant(metadata)]
]);

module.exports = siteMetadataMap({ isProduction });
