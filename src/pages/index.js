import React, { Fragment } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Rotate } from "../organizations/home";

const Root = styled.div`
`;

const HomePage = () => {
  return (
    <Root>
      <Rotate />
    </Root>
  );
};

export default HomePage;
