import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SubTitle } from '../../components/Title';
import { PortfolioCard } from '../../components/Card';
import { callValue } from '../../utils/ObjectUtils';
import { ImagePopup } from '../../components/Popup';

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  font-weight: bold;
  padding-bottom: 20px;
`;

const ContentBox = styled.div`
  padding-top: 20px;
`;

class Portfolio extends Component {
  static propTypes = {
    title: PropTypes.string,
    productions: PropTypes.object
  };
  static defaultProps = {
    title: "Company Project"
  };

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
}

export default Portfolio;
