import React, { Component, PureComponent } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Link from "gatsby-link";
import GoBookIcon from "react-icons/lib/go/book";
import { media } from "../../utils/StyleUtils";

import { SubTitle } from "../Title";
import { Separator } from "../Separator";

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

const TitleBox = styled(SubTitle) `
  grid-area: title;
  font-size: 36px;
  line-height: 40px;
  text-align: left;
`;

const BookIcon = styled(GoBookIcon) `
  padding-left: 5px;
  padding-bottom: 3px;
`;

const NameBox = styled.span`
  color: ${props => props.theme.third};
  margin-right: 3px;
  font-size: 13px;
`;

const DateBox = styled.div`
  grid-area: date;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  line-height: 16px;
  font-size: 13px;
  color: ${props => props.theme.primary};
  ${media.mobile`
  line-height: 20px;
  margin-bottom: 15px;
    `};
`;

const LinkCSS = css`
  font-size: 13px;
  color: ${props => props.theme.secondary};
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
    ${ LinkCSS}
  }
`;

const BottomSeparator = styled(Separator) `
  grid-area: separator;
  margin: 40px 0px;
`;

class PostCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.objectOf(Date),
    url: PropTypes.string,
    linkUrl: PropTypes.string
  };

  static defaultProps = {
    title: "Hello World",
    date: new Date(),
    url: "",
    linkUrl: ""
  };

  render() {
    const { title, date, url, linkUrl } = this.props;
    return (
      <Root>
        <TitleBox title={title} />
        <DateBox>
          <NameBox>Date:</NameBox>
          {format(date, "MMMM D, YYYY")}
        </DateBox>
        {url && (
          <UrlBox>
            <Link to={url}>View Article<BookIcon size={25} /></Link>
          </UrlBox>
        )}
        {linkUrl && (
          <UrlBox>
            <a href={linkUrl} target="_blank">
              View Article<BookIcon size={25} />
            </a>
          </UrlBox>
        )}
        <BottomSeparator />
      </Root>
    );
  }
}

export default PostCard;
