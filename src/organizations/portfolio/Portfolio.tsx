import _ from "lodash";
import React, { Component } from "react";
import styled from "styled-components";
import { PortfolioCard } from "../../components/Card";
import { ImagePopup } from "../../components/Popup";
import { SubTitle } from "../../components/Title";
import { callValue } from "../../utils/object";
import { IProjectProduction } from "src/constants/production";

interface IProps {
  title: string;
  productions: any[];
  images: any[];
}

interface IStates {
  renderImage: () => React.ReactNode;
  showModal: boolean;
}

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 20px;
`;

const ContentBox = styled.div`
  padding-top: 20px;
`;

class Portfolio extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      renderImage: _.identity,
      showModal: false
    };
  }

  public render() {
    const { title, productions } = this.props;
    const { showModal, renderImage } = this.state;

    return (
      <Root>
        <SubTitleBox title={title} />
        <ContentBox>{_.map(productions, this.renderPortfolioCard)}</ContentBox>
        <ImagePopup
          showModal={showModal}
          renderImage={renderImage}
          onClose={this.onClose}
        />
      </Root>
    );
  }

  private onImagePopup = (renderImage: () => React.ReactNode) => {
    this.setState({
      renderImage,
      showModal: true
    });
  };

  private onClose = () => {
    this.setState({
      showModal: false
    });
  };

  private renderPortfolioCard = (production: IProjectProduction) => {
    const { images } = this.props;
    const {
      id,
      name,
      period,
      skills,
      summary = "",
      githubUrl,
      linkUrl,
      googleStoreUrl,
      appStoreUrl
    } = production;

    return (
      <PortfolioCard
        key={id}
        name={name}
        period={period}
        skills={skills}
        summary={summary}
        githubUrl={githubUrl}
        linkUrl={linkUrl}
        googleStoreUrl={googleStoreUrl}
        appStoreUrl={appStoreUrl}
        images={callValue(() => images[`${id}Images` as any].edges, [])}
        onImagePopup={this.onImagePopup}
      />
    );
  };
}

export default Portfolio;
