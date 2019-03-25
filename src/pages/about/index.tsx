import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Education,
  Experience,
  Activity,
  Skill,
} from '../../organizations/about';
import Layout from "../../components/Layout";

const Root = styled.div`
  padding-top: 20px;
`;

function AboutPage(props) {
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
