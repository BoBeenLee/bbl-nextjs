import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import _ from "lodash";
import GithubIcon from "react-icons/lib/go/mark-github";
import LinkIcon from "react-icons/lib/go/link";
import "./PortfolioCard.css";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  color: ${props => props.theme.primary};
  margin: 40px 0;
`;

const NameBox = styled.div`
  grid-column: 1;
  grid-row: 1;
  font-size: 20px;
`;

const PeriodBox = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 13px;
  color: ${props => props.theme.third};
`;

const LinkBox = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const SkillsBox = styled.div`
  grid-column: 1/4;
  grid-row: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 13px;
  color: ${props => props.theme.secondary};
  padding: 10px 0;
`;

const SkillItem = styled.div``;

const SummaryBox = styled.div`
  grid-column: 1/4;
  grid-row: 3;
`;

const GalleryBox = styled.div`
  grid-column: 1/4;
  grid-row: 4;
  display: grid;
  grid-auto-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 10px;
`;

const MainImageItem = styled.div`
  grid-column: 1/5;
  display: block;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const ImageItem = styled.div`
  /* grid-row-start: 2; */
`;

const ImageBox = styled(Img)`
  width: 50%;
`;

class PortfolioCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    period: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string)
  };
  static defaultProps = {
    name: "flass",
    period: "2016-01 ~ 2017-01",
    skills: [
      "ReactJS",
      "React-Router",
      "Mocha",
      "Redux",
      "Material UI",
      "Webpack",
      "Sass",
      "Rails"
    ],
    summary: "INTRO",
    images: _.times(
      5,
      () =>
        "https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=512&h=512"
    )
  };
  render() {
    const { name, period, skills, summary } = this.props;

    return (
      <Root>
        <NameBox>{name}</NameBox>
        <PeriodBox>{period}</PeriodBox>
        <LinkBox>
          <GithubIcon disabled size={20} />
          <LinkIcon size={20} />
        </LinkBox>
        <SkillsBox>{_.map(skills, this._renderSkillItem)}</SkillsBox>
        <SummaryBox>{summary}</SummaryBox>
        {this._renderGallery()}
      </Root>
    );
  }

  _renderSkillItem = (skill, index) => {
    return <SkillItem key={index}>{skill}</SkillItem>;
  };

  _renderGallery = () => {
    const { images } = this.props;

    if (_.isEmpty(images)) {
      return <div />;
    }
    const mainImage = _.first(images);
    const otherImage = _.slice(images, 1);
    return (
      <GalleryBox>
        <MainImageItem>
          <ImageBox
            outerWrapperClassName={"main-image-wrapper"}
            sizes={mainImage.node.sizes}
          />
        </MainImageItem>
        {_.map(otherImage, (image, index) => (
          <ImageItem key={index}>
            <Img sizes={image.node.sizes} />
          </ImageItem>
        ))}
      </GalleryBox>
    );
  };
}

export default PortfolioCard;
