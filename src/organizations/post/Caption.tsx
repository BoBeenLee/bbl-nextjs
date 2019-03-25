import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Separator } from '../../components/Separator';
import { SocialLinks } from '../../components/SocialLinks';

const Root = styled.div`
    margin-top: 50px;
`;

const SocialLinkBox = styled(SocialLinks)`
    width: 150px;
    float: right;
`;

class Caption extends Component<any> {
  static propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };
  static defaultProps = {
    url: 'http://bbl.netlify.com',
    title: 'hello world',
    description: 'hello',
  };
  render() {
    const { url, title, description } = this.props;
    return (
      <Root>
        <Separator />
        <SocialLinkBox
          url={`http://bbl.netlify.com${url}`}
          title={title}
          description={description}
        />
      </Root>);
  }
}

export default Caption;
