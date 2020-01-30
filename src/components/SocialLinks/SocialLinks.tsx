import React, { Component } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import styled from "styled-components";

interface IProps {
  url: string;
  title: string;
  description: string;
  iconSize: number;
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0;
`;

class SocialLinks extends Component<IProps> {
  public static defaultProps = {
    description: "hello",
    iconSize: 35,
    title: "hello world",
    url: "http://bbl.netlify.com"
  };
  public render() {
    const { url, title, description, iconSize, ...rest } = this.props;
    const filter = (count: number) => (count > 0 ? count : "");

    return (
      <Root {...rest}>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round={true} size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon round={true} size={iconSize} />
          {/* <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount> */}
        </FacebookShareButton>
      </Root>
    );
  }
}

export default SocialLinks;
