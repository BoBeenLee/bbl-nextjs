import React from "react";
import { compose } from "recompose";
import { setAppElement } from "react-modal";

import { getRootStore } from "src/stores/Store";
import withStore from "src/hocs/withStore";
import { isProduction } from "src/configs/env";
import { setupReactotron } from "ReactotronConfig";

const store = getRootStore();

if (!isProduction()) {
  setupReactotron(store);
}

export const wrapPageElement = ({ element }) => {
  return element;
};

export const wrapRootElement = ({ element }) => {
  store.initializeApp();

  const enhanceElement = compose(withStore(store))(element);
  return enhanceElement;
};

export function onClientEntry() {
  setAppElement("#___gatsby");
}
