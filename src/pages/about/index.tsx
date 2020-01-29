import { PageRendererProps } from "gatsby";
import React, { Component, PureComponent } from "react";
import styled from "styled-components";

import Layout from "../../components/Layout";
import {
  Activity,
  Education,
  Experience,
  Skill
} from "../../organizations/about";

const Root = styled.div`
  padding-top: 20px;
`;

function AboutPage(props: PageRendererProps) {
  return (
    <Layout pathname={props.location.pathname}>
      <Root>
        <Education />
        <Experience />
        <Activity />
        <Skill />
      </Root>
    </Layout>
  );
}

export default AboutPage;
