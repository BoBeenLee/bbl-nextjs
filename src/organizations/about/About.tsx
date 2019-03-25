import React, { Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import { SubTitle, ContentTitle } from '../../components/Title';
import { Separator } from '../../components/Separator';


const Root = styled.div`
`;

class About extends Component<any, any> {
  static propTypes = {};
  static defaultProps = {};

  state = {
    count: 0,
  };

  increase = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <Root>
        <button onClick={this.increase}>Increase</button>
        <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
          {value => <div style={{ opacity: value }}>Hello{this.state.count}</div>}
        </Motion>
        <SubTitle title="About" />
        <Separator />
      </Root>
    );
  }
}

export default About;
