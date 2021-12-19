const babelOptions = {
  presets: ["next/babel", ["@babel/env", { targets: { node: 6 } }]],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    [
      "module-resolver",
      {
        alias: {
          src: "./src"
        },
        cwd: "babelrc"
      }
    ],
    ["@babel/plugin-proposal-class-properties", { loose: false }]
  ]
};

module.exports = require(`babel-jest`).createTransformer(babelOptions);
