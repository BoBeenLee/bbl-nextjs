import React, { Component } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import styled from "styled-components";
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
  grid-template-columns: 1fr 1fr;

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
`;

const LinkBox = styled(Link)`
  grid-area: link;
  padding-top: 20px;
  padding-left: 3px;
  font-size: 13px;
  color: ${props => props.theme.secondary};
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`;

const BookIcon = styled(GoBookIcon)`
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

const BottomSeparator = styled(Separator)`
  grid-area: separator;
  margin: 40px 0px;
`;

class PostCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string
  };

  static defaultProps = {
    title: "Hello World",
    date: "2018-02-05T13:42:31Z",
    url: "/about"
  };

  render() {
    const { title, date, url } = this.props;
    return (
      <Root>
        <TitleBox title={title} />
        <DateBox>
          <NameBox>Date:</NameBox>
          {format(new Date(date), "MMMM D,YYYY")}
        </DateBox>
        <LinkBox to={url}>
          View Article<BookIcon size={25} />
        </LinkBox>
        <BottomSeparator />
      </Root>
    );
  }
}

export default PostCard;
