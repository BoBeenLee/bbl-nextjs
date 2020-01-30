import { PageRendererProps } from "gatsby";
import React, { Component } from "react";
import styled from "styled-components";

import Layout from "src/components/Layout";
import {
  Activity,
  Education,
  Experience,
  Skill
} from "src/organizations/about";

const Root = styled.div`
  padding-top: 20px;
`;

class AboutPage extends Component<PageRendererProps> {
  public render() {
    const { location } = this.props;
    return (
      <Layout pathname={location.pathname}>
        <Root>
          <Education />
          <Experience />
          <Activity />
          <Skill />
        </Root>
      </Layout>
    );
  }
}

export default AboutPage;
