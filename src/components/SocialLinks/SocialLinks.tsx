import React, { Component } from "react";
import styled from "styled-components";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  EmailIcon,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount
} from "react-share";

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
    url: "http://bbl.netlify.com",
    title: "hello world",
    description: "hello",
    iconSize: 35
  };
  public render() {
    const { url, title, description, iconSize, ...rest } = this.props;
    const filter = count => (count > 0 ? count : "");

    return (
      <Root {...rest}>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          {/* <GooglePlusShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </GooglePlusShareCount> */}
        </GooglePlusShareButton>
        <FacebookShareButton url={url} title={title} description={description}>
          <FacebookIcon round size={iconSize} />
          {/* <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount> */}
        </FacebookShareButton>
      </Root>
    );
  }
}

export default SocialLinks;
