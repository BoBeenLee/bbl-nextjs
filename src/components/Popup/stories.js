import React from "react";
import { storiesOf, action } from "@storybook/react";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import styled from "styled-components";
import { BottomPopup, ImagePopup } from "./";
import Board from "./images/board.png";
// knobs

const Root = styled.div``;

const Child = styled.div``;

const ImageBox = styled.div``;

storiesOf("Popup", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("with BottomPopup", () => (
    <Child>
      <BottomPopup>Hello World</BottomPopup>
    </Child>
  ))
  .add("with ImagePopup", () => (
    <Child>
      <ImagePopup
        renderImage={() => <img width="100%" height="100" src={Board} alt="" />}
      />
    </Child>
  ));
