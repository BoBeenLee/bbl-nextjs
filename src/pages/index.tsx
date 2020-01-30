import { PageRendererProps } from "gatsby";
import React, { Component } from "react";
import styled from "styled-components";
import Layout from "src/components/Layout";
import { Rotate } from "src/organizations/home";

const Root = styled.div`
  height: 100%;
`;

class HomePage extends Component<PageRendererProps> {
  public render() {
    const { location } = this.props;
    return (
      <Layout pathname={location.pathname}>
        <Root>
          <Rotate />
        </Root>
      </Layout>
    );
  }
}

export default HomePage;
