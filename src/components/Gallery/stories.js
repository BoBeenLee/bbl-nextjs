import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import styled from "styled-components";
import { PhotoGallery } from "./";
import { media } from "../../utils/StyleUtils";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  color: ${props => props.theme.primary};
`;

const Child = styled.div`
  grid-column: 2/3;
  grid-row: 1;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;

  ${media.mobile`
    grid-column: 1/4;
  `};
`;

storiesOf("PhotoGallery", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("with PhotoGallery", () => (
    <Child>
      <PhotoGallery />
    </Child>
  ));