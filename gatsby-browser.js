/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const ReactModal = require("react-modal");

exports.onClientEntry = () => {
  ReactModal.setAppElement("#___gatsby");
};
