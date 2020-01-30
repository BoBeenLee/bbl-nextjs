import _ from "lodash";
import React, { Component, PureComponent } from "react";
import { DiAndroid, DiApple } from "react-icons/di";
import { GoLink as LinkIcon, GoMarkGithub as GithubIcon } from "react-icons/go";

import styled from "styled-components";
import { skillMap } from "../../constants/skill";
import { media } from "../../utils/media";
import { PhotoGallery } from "../Gallery";
import { Separator } from "../Separator";
import theme from "src/constants/theme";

interface IProps {
  name: string;
  period: string;
  skills: string[];
  summary: string;
  images: any[];
  githubUrl: string;
  linkUrl: string;
  googleStoreUrl?: string;
  appStoreUrl?: string;
  onImagePopup: (render: any) => void;
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  color: ${theme.primary};
`;

const NameBox = styled.div`
  grid-column: 1;
  grid-row: 1;
  font-size: 20px;
  padding-left: 10px;
`;

const PeriodBox = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 13px;
  color: ${theme.third};
`;

const LinkBox = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const IconBox = styled.a`
  margin-left: 10px;
  color: ${theme.primary};
  text-decoration: none;
  &:hover {
    color: ${theme.secondary};
  }
`;

const SkillsBox = styled.div`
  grid-column: 1/4;
  grid-row: 2;
  font-size: 13px;
  color: ${theme.secondary};
  padding: 15px 0px 10px 10px;
`;

const SkillItem = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const SkillLinkItem = styled.a`
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;

const SummaryBox = styled.div`
  grid-column: 1/4;
  grid-row: 3;
  padding-left: 10px;
  font-size: 12px;
  color: ${theme.third};
`;

const PhotoGalleryBox = styled.div`
  grid-column: 2/3;
  grid-row: 4;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 767px;

  ${media.mobile`
    grid-column: 1/4;
  `};
`;

const BottomSeparator = styled(Separator)`
  grid-column: 1/5;
  grid-row: 5;
  margin: 40px 0;
`;

class PortfolioCard extends PureComponent<IProps> {
  // tslint:disable:object-literal-sort-keys
  public static defaultProps = {
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
    images: _.times(5, () => {
      const obj = {
        node: {
          childImageSharp: {
            fluid: {
              tracedSVG:
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='711' viewBox='0 0 400 711'%3E%3Crect width='100%25' height='100%25' fill='%23f2f8f3'/%3E%3Cpath d='M0 14v14l200.3-.2 200.2-.3.3-13.8L401 0H0v14m119.2-8.8c-1.3 1.3-1.7 17.8-.4 17.8.4 0 .6-1.8.4-4-.4-3.8-.3-4 1.4-3.2 1 .6 2.7 1.3 3.7 1.6 1 .3 1.7 1.4 1.7 2.5 0 1 .8 2.2 1.8 2.4 1.3.4 1.1.5-.5.6-1.3 0-2.3-.4-2.3-1 0-.8-.5-.8-1.5.1-1.2 1-1.5 1-1.5-.4 0-.9-.4-1.6-.8-1.6s-.8.9-.8 2c0 1.8.7 2 7.8 2 4.8 0 8-.4 8.4-1.2.5-.8.2-1-.9-.5-2 .8-3.3-1-1.7-2.6.9-1 1.5-.7 2.6.7 1.4 2 1.4 2 1.4-.2 0-1.7-.6-2.2-2.6-2.2-1.4 0-2.3-.4-2-1 .4-.5 1.5-.7 2.6-.5 1.8.3 2-.2 2-5 0-3-.4-5.7-1-6-.6-.3-1-.1-1 .4 0 1.7-2.7 1.3-3.4-.4-.7-1.9-11.6-2.1-13.4-.3m42.2 1c-1.6 1.7-1 11.3.7 12.4.5.3.6 1.7.2 3.2-.5 2.2-.4 2.5.8 1.6a22 22 0 0 1 12.7 0c.6.4 1.2.6 1.3.4l.4-3.3a55 55 0 0 1 1.4-7c1.7-6.5-.7-8.9-9.3-9-5 0-7 .4-8.2 1.6m58.8 2.7l.3 4.7 7.3.3 7.2.3V4h-15.1l.3 4.8M306 5c0 .5-.7 1-1.5 1-1.2 0-1.5 1.7-1.5 9v9h12v-9c0-7.3-.3-9-1.5-9-.8 0-1.5-.5-1.5-1s-1.4-1-3-1-3 .5-3 1M41.6 10L38 14l3.1 4c3.2 4 3.3 4 10 4H58V6h-6.4c-6.2 0-6.5.1-10 4m124.9-2.8c-7 4-4.9 13.8 2.9 13.8 7.9 0 10.5-10 3.5-13.5-3.3-1.8-3.8-1.8-6.4-.3m-64 2.8c-.3.5-1.6 1-2.8 1-2.6 0-6.1 4.4-5.3 6.6.4 1 2.2 1.4 6.7 1.4 5.6 0 6-.2 5.6-2-.3-1.3 0-2 .9-2 2.3 0 1.6-1.7-1.5-4-1.8-1.2-3.2-1.6-3.6-1M66 15.5c-.3.2-.3 2 0 4 .3 3.2.6 3.5 3.7 3.5s3.4-.2 2.9-2.3c-.7-2.7 1.4-5 3.4-3.7.8.5 1.2 1.8.9 3.4-.5 2.4-.3 2.6 3.3 2.6 3.9 0 3.9 0 3.9-4v-4h-8.8c-4.9 0-9 .2-9.3.5m122.3 184c-4.5 3.2-1.7 9.5 4.3 9.5.8 0 1.7.5 2 1.2.6.8-.3 1-3.4.4-5.3-.8-6.8 0-4.5 2.5 3.8 4.3 12.8 1.7 12.2-3.5-.3-3-1.6-4.1-6.2-5.1-2.2-.5-2.6-.9-1.7-1.8.9-.9 1.6-.9 3 0 2 1.3 5.1.8 5.1-.8 0-1.3-4.3-3.9-6.5-3.9a9 9 0 0 0-4.3 1.6m29.8-1c-4.3 1.6-5.7 11.5-2.2 14.7 2.5 2.3 8.5 2.2 10.6-.2 1.7-1.8 1.7-2 0-2.9a3.2 3.2 0 0 0-3.5 0c-2.6 1.7-4.9.2-4.9-3 0-4 2.2-5.7 5-4 1.4.9 2.5 1 3.8.3 4.2-2.5 6.2-.8 6.2 5.6 0 5.2.2 5.9 2 5.9s2-.7 2-6 .2-5.9 2.2-6.2c1.3-.2 2.4-1 2.6-2 .3-1.6-.5-1.8-6.7-1.8-6 0-7.1.3-7.1 1.8 0 1-.3 1.3-.8.6-1.7-2.6-6-3.9-9.2-2.7m33.3 1.9c-2.2 2.2-2.5 3.2-2 7.2.6 5.2 2.5 7.2 7.2 7.2 5.2 0 7-2 7-8 0-8.4-6.7-12-12.2-6.4M128 207c0 7.3.2 8 2 8 1.5 0 2-.8 2.2-3.8l.3-3.7 2.3 3.8c4.2 6.6 6.2 5.2 6.2-4.3 0-7.3-.2-8-2-8-1.6 0-2 .7-2 3.7v3.8l-2.5-3.8c-4.5-6.5-6.5-5.2-6.5 4.3m15-6c0 1.3.7 2 2 2 1.8 0 2 .7 2 6 0 5.8.1 6.1 2.3 5.8 2-.3 2.2-1 2.5-6 .2-4.6.6-5.7 2.2-6.1 1.1-.3 2-1.2 2-2.1 0-1.3-1.2-1.6-6.5-1.6-5.8 0-6.5.2-6.5 2m14 6v8h6c5.3 0 6-.2 6-2 0-1.6-.7-2-3.5-2-4.1 0-4.7-1.7-.8-2.2 4.1-.5 4.4-3.8.4-3.8-4.1 0-4-1.8.1-2.2 2.2-.2 3.4-.9 3.6-2 .3-1.6-.5-1.8-5.7-1.8H157v8m14 0c0 7.3.2 8 2 8 1.5 0 2-.7 2-2.5 0-1.4.6-2.5 1.3-2.5.8 0 1.9 1.1 2.5 2.5.7 1.5 2 2.5 3.2 2.5 2.3 0 2.5-1.2 1-4.2-.9-1.5-.9-2.3 0-3.1 1.4-1.5 1.3-6-.2-7.5-.7-.7-3.6-1.2-6.5-1.2H171v8m30 0v8.1l5.7-.3c4.6-.2 5.9-.7 6.1-2 .3-1.5-.4-1.8-3.7-1.8-2.3 0-4.1-.4-4.1-1s1.3-1 3-1c2.3 0 3-.4 3-2 0-1.5-.7-2-2.4-2-1.4 0-2.8-.4-3.1-1-.4-.6.8-1 3-1 2.8 0 3.5-.4 3.5-2 0-1.8-.7-2-5.5-2H201v8m65 0c0 7.3.2 8 2 8 1.7 0 2-.7 2-4.3v-4.2l2.6 4.3c2 3.3 3.1 4.2 4.7 4 2-.3 2.2-1 2.5-8l.3-7.8h-2.7c-2.4 0-2.6.3-2.2 3.5.2 2 .1 3.5-.2 3.5-.3 0-1.4-1.6-2.4-3.5-1.4-2.5-2.6-3.5-4.3-3.5-2.2 0-2.3.3-2.3 8m-93.7 91.3L145 315.5v72l24.6 15c13.5 8.3 26 15.7 27.7 16.6l3.1 1.7 27.8-17 27.7-17v-70.6l-27.8-17.6c-15.4-9.7-28-17.6-28.3-17.6-.2 0-12.6 7.8-27.6 17.3m-34.9 185.6c-.2.2-.4 8.5-.4 18.3V520h124l-.2-18-.3-18.1-61.3-.2c-33.8-.1-61.6 0-61.8.2m27.7 14.8c-1.3.8-2.1 2.5-2.1 4.2 0 5.9 5.8 7 9 1.9 1.6-2.6 2-2.9 2-1.3 0 4 1.8 5.3 3.9 2.6 1.8-2.3 1.8-2.3 2.4-.2.3 1.1 1 2.1 1.6 2.1 1 0 3-6 3-8.8.1-2.3-1.7-1.2-2.4 1.6l-.8 2.7-.6-2.5c-.4-1.4-1.3-2.5-2.1-2.5s-1.7 1.1-2 2.5l-.6 2.5-.7-2.8c-.9-3.3-2.7-3.6-2.8-.4 0 2.2 0 2.2-.9 0-1-2.7-4.3-3.5-7-1.6' fill='%23d6ebd9' fill-rule='evenodd'/%3E%3C/svg%3E",
              aspectRatio: 0.5625,
              src:
                "https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256",
              srcSet:
                "https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=256&h=256",
              sizes: "(max-width: 430px) 100vw, 430px"
            }
          }
        }
      };
      return obj;
    }),
    githubUrl: "",
    linkUrl: "",
    onImagePopup: _.identity
  };

  public render() {
    const {
      name,
      period,
      skills,
      summary,
      githubUrl,
      linkUrl,
      googleStoreUrl,
      appStoreUrl,
      images,
      onImagePopup
    } = this.props;
    return (
      <Root>
        <NameBox>{name}</NameBox>
        <PeriodBox>{period}</PeriodBox>
        <LinkBox>
          {googleStoreUrl && (
            <IconBox href={googleStoreUrl} target="_blank">
              <DiAndroid size={20} />
            </IconBox>
          )}
          {appStoreUrl && (
            <IconBox href={googleStoreUrl} target="_blank">
              <DiApple size={20} />
            </IconBox>
          )}
          {githubUrl && (
            <IconBox href={githubUrl} target="_blank">
              <GithubIcon size={20} />
            </IconBox>
          )}
          {linkUrl && (
            <IconBox href={linkUrl} target="_blank">
              <LinkIcon size={20} />
            </IconBox>
          )}
        </LinkBox>
        <SkillsBox>{_.map(skills, this.renderSkillItem)}</SkillsBox>
        <SummaryBox>{summary}</SummaryBox>
        <PhotoGalleryBox>
          <PhotoGallery images={images} onImagePopup={onImagePopup} />
        </PhotoGalleryBox>
        <BottomSeparator />
      </Root>
    );
  }

  private renderSkillItem = (skillName: string, index: number) => {
    const uri = skillMap[_.replace(skillName, / /g, "_").toUpperCase()]?.uri;
    if (!_.isEmpty(uri)) {
      return (
        <SkillLinkItem key={index} href={uri} target="_blank">
          {skillName}
        </SkillLinkItem>
      );
    }
    return <SkillItem key={index}>{skillName}</SkillItem>;
  };
}

export default PortfolioCard;
