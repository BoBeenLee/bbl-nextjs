const path = require(`path`);
const _ = require("lodash");
const withImages = require("next-images");
const localeSubpaths = {};

module.exports = withImages({
  images: {
    disableStaticImages: true
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {
    staticFolder: "/public",
    localeSubpaths
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configration for compilation
        presets: ["next/babel", ["@babel/env", { targets: { node: 6 } }]],
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          [
            "module-resolver",
            {
              root: ["."],
              alias: {
                src: "./src"
              },
              cwd: "babelrc"
            }
          ],
          ["@babel/plugin-proposal-class-properties", { loose: false }],
          [
            "styled-components",
            { ssr: true, displayName: true, preprocess: false }
          ]
        ]
      }
    });
    return config;
  },
  api: {
    bodyParser: {
      sizeLimit: "50mb"
    }
  }
});
