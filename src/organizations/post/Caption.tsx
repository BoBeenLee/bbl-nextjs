import React, { Component } from "react";
import styled from "styled-components";
import { Separator } from "src/components/Separator";
import { SocialLinks } from "src/components/SocialLinks";

interface IProps {
  url: string;
  title: string;
  description: string;
}

const Root = styled.div`
  margin-top: 50px;
`;

const SocialLinkBox = styled(SocialLinks)`
  width: 150px;
  float: right;
`;

class Caption extends Component<IProps> {
  public render() {
    const { url, title, description } = this.props;
    return (
      <Root>
        <Separator />
        <SocialLinkBox
          url={`http://bbl.netlify.com${url}`}
          title={title}
          description={description}
          iconSize={35}
        />
      </Root>
    );
  }
}

export default Caption;
