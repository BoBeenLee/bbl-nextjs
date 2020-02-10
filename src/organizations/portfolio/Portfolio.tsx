import _ from "lodash";
import React, { Component } from "react";
import styled from "styled-components";
import { PortfolioCard } from "src/components/Card";
import { ImagePopup } from "src/components/Popup";
import { SubTitle } from "src/components/Title";
import { callValue } from "src/utils/object";
import { IProjectPortfolio } from "src/constants/portfolio";
import { IEdgeSharpItem } from "src/images";

interface IProps {
  title: string;
  portfolios: IProjectPortfolio[];
  images: { [key in string]: IEdgeSharpItem };
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
    const { title, portfolios } = this.props;
    const { showModal, renderImage } = this.state;

    return (
      <Root>
        <SubTitleBox title={title} />
        <ContentBox>{_.map(portfolios, this.renderPortfolioCard)}</ContentBox>
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

  private renderPortfolioCard = (portfolio: IProjectPortfolio) => {
    const { images } = this.props;
    const {
      id,
      name,
      period,
      skills,
      summary = "",
      githubUrl,
      linkUrl,
      storybookUrl,
      googleStoreUrl,
      appStoreUrl
    } = portfolio;

    return (
      <PortfolioCard
        key={id}
        name={name}
        period={period}
        skills={skills}
        summary={summary}
        githubUrl={githubUrl}
        linkUrl={linkUrl}
        storybookUrl={storybookUrl}
        googleStoreUrl={googleStoreUrl}
        appStoreUrl={appStoreUrl}
        portfolioImages={callValue(() => images[`${id}Images`].edges, [])}
        onImagePopup={this.onImagePopup}
      />
    );
  };
}

export default Portfolio;
