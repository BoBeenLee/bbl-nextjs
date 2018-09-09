import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SubTitle } from '../../components/Title';
import { teamProductions } from './data';
import { PortfolioCard } from '../../components/Card';
import { callValue } from '../../utils/ObjectUtils';
import { ImagePopup } from '../../components/Popup';

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 10px;
`;

const ContentBox = styled.div`
  padding-top: 20px;
`;

class TeamPortfolio extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    showModal: false,
    renderImage: () => { },
  };

  onImagePopup = (renderImage) => {
    this.setState({
      renderImage,
      showModal: true,
    });
  };

  _onClose = () => {
    this.setState({
      showModal: false,
    });
  };

  _renderPortfolioCard = (production) => {
    const { images } = this.props;
    const {
      id,
      name,
      period,
      skills,
      summary = '',
      githubUrl,
      linkUrl,
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

  render() {
    const { showModal, renderImage } = this.state;

    return (
      <Root>
        <SubTitleBox title={`Team Project`} />
        <ContentBox>{_.map(teamProductions, this._renderPortfolioCard)}</ContentBox>
        <ImagePopup
          showModal={showModal}
          renderImage={renderImage}
          onClose={this._onClose}
        />
      </Root>
    );
  }
}

export default TeamPortfolio;
