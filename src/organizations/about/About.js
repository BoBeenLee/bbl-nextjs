import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SubTitle, ContentTitle } from "../../components/Title";
import { Separator } from "../../components/Separator";
import { Motion, spring } from 'react-motion';



const Root = styled.div`
`;

class About extends Component {
  state = {
    count: 0
  };

  static propTypes = {};
  static defaultProps = {};

  increase = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <Root>
        <button onClick={this.increase}>Increase</button>
        <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
          {value => <div style={{ opacity: value }}>Hello{this.state.count}</div>}
        </Motion>
        <SubTitle title={"About"} />

        <Separator />
      </Root>
    );
  }
}

export default About;
