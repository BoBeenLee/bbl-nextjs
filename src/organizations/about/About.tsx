import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import { Separator } from '../../components/Separator';
import { ContentTitle, SubTitle } from '../../components/Title';


const Root = styled.div`
`;

class About extends Component<any, any> {
  public static propTypes = {};
  public static defaultProps = {};

  public state = {
    count: 0,
  };

  public increase = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  public render() {
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
