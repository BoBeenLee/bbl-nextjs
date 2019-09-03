import React from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import { Rotate } from '../organizations/home';

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
