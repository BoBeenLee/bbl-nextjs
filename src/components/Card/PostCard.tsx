import { format } from "date-fns";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { PureComponent } from "react";
import { GoBook as GoBookIcon } from "react-icons/go";
import styled, { css } from "styled-components";
import { media } from "src/utils/media";

import { Separator } from "src/components/Separator";
import { SubTitle } from "src/components/Title";
import theme from "src/constants/theme";

interface IProps {
  title: string;
  date: Date;
  url: string;
  linkUrl: string;
}

const Root = styled.div`
  display: grid;
  grid-template-areas:
    "title date"
    "link link"
    "separator separator";
  grid-template-columns: 1fr 200px;
  grid-column-gap: 20px;
  ${media.mobile`
    grid-template-areas:
    "date"
    "title"
    "link"
    "separator";
    grid-template-columns: 1fr;
    `};
`;

const TitleBox = styled(SubTitle)`
  grid-area: title;
  font-size: 36px;
  line-height: 40px;
  text-align: left;
`;

const BookIcon = styled(GoBookIcon)`
  padding-left: 5px;
  padding-bottom: 3px;
`;

const DateBox = styled.div`
  grid-area: date;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  line-height: 16px;
  font-size: 13px;
  color: ${theme.primary};
  justify-content: flex-end;
  ${media.mobile`
  line-height: 20px;
  margin-bottom: 15px;
    `};
`;

const LinkCSS = css`
  font-size: 13px;
  color: ${theme.secondary};
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`;

const UrlBox = styled.div`
  grid-area: link;
  padding-top: 10px;
  padding-left: 3px;
  a {
    ${LinkCSS}
  }
`;

const ArticleLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 26px;
`;

const AniLinkBox = styled(AniLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 26px;
`;

const BottomSeparator = styled(Separator)`
  grid-area: separator;
  margin: 40px 0px;
`;

class PostCard extends PureComponent<IProps> {
  public static defaultProps = {
    date: new Date(),
    linkUrl: "",
    title: "Hello World",
    url: ""
  };

  public render() {
    const { title, date, url, linkUrl } = this.props;
    return (
      <Root>
        <TitleBox title={title} />
        <DateBox>{format(date, "MMMM D, YYYY")}</DateBox>
        {url && (
          <UrlBox>
            <AniLinkBox as={AniLink} fade={true} to={url}>
              View Article
              <BookIcon size={25} />
            </AniLinkBox>
          </UrlBox>
        )}
        {linkUrl && (
          <UrlBox>
            <ArticleLink href={linkUrl} target="_blank">
              View Article
              <BookIcon size={25} />
            </ArticleLink>
          </UrlBox>
        )}
        <BottomSeparator />
      </Root>
    );
  }
}

export default PostCard;
