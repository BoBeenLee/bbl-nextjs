import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Rotate } from '../organizations/home';
import Layout from "../components/Layout";

const Root = styled.div`
  height: 100%;
`;

const HomePage = (props) => (
  <Layout pathname={props.location.pathname}>
    <Root>
      <Rotate />
    </Root>
  </Layout>
);

export default HomePage;
