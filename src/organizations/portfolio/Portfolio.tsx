import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import _ from "lodash";
import { SubTitle } from "../../components/Title";
import { PortfolioCard } from "../../components/Card";
import { callValue } from "../../utils/object";
import { ImagePopup } from "../../components/Popup";

interface IProps {
  title: string;
  productions: any[];
  images: any[];
}

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  font-weight: bold;
  padding-bottom: 20px;
`;

const ContentBox = styled.div`
  padding-top: 20px;
`;

class Portfolio extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      showModal: false,
      renderImage: () => {}
    };
  }

  public render() {
    const { title, productions } = this.props;
    const { showModal, renderImage } = this.state;

    return (
      <Root>
        <SubTitleBox title={title} />
        <ContentBox>{_.map(productions, this._renderPortfolioCard)}</ContentBox>
        <ImagePopup
          showModal={showModal}
          renderImage={renderImage}
          onClose={this._onClose}
        />
      </Root>
    );
  }

  onImagePopup = renderImage => {
    this.setState({
      renderImage,
      showModal: true
    });
  };

  private _onClose = () => {
    this.setState({
      showModal: false
    });
  };

  private _renderPortfolioCard = production => {
    const { images } = this.props;
    const {
      id,
      name,
      period,
      skills,
      summary = "",
      githubUrl,
      linkUrl
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
        images={callValue(() => images[`${id}Images`].edges, [])}
        onImagePopup={this.onImagePopup}
      />
    );
  };
}

export default Portfolio;
