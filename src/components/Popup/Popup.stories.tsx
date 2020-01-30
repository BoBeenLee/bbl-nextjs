import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import styled from "styled-components";
import { BottomPopup, ImagePopup } from "src/components/Popup";
import Board from "./images/board.png";

const Root = styled.div``;

const Child = styled.div``;

const renderImage = () => <img width="100%" height="500" src={Board} alt="" />;

storiesOf("Popup", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("with BottomPopup", () => (
    <Child>
      <BottomPopup>Hello World</BottomPopup>
    </Child>
  ))
  .add("with ImagePopup", () => (
    <Child>
      <ImagePopup showModal={true} renderImage={renderImage} />
    </Child>
  ));
