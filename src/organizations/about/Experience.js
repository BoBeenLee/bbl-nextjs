import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SubTitle, ContentTitle } from '../../components/Title';
import { Separator } from '../../components/Separator';
import { LineText } from '../../components/Text';
import { media } from '../../utils/StyleUtils';

const Root = styled.div``;

const SubTitleBox = styled(SubTitle)`
  padding-bottom: 30px;
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 10px;
  margin-bottom: 15px;

  ${media.mobile`
    grid-template-columns: 1fr;
  `};
`;

const TitleBox = styled(ContentTitle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentBox = styled(LineText)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomSeparator = styled(Separator)`
  margin: 40px 0;
`;

class Experience extends PureComponent {
  static propTypes = {};
  static defaultProps = {};

  _renderItem = item => (
    <ItemBox key={item.title}>
      <TitleBox title={item.role} />
      <ContentBox>{`${item.title} / ${item.period}`}</ContentBox>
    </ItemBox>
  );
  render() {
    const items = [
      {
        title: 'Buxi',
        period: '2017.8 - 2017.11',
        role: 'React Developer',
      },
      {
        title: 'Coupang',
        period: '2015.6 - 2017.7',
        role: 'Fullstack Developer',
      },
      {
        title: 'DailyHotel',
        period: '2014.11 - 2015.1',
        role: 'Developer Intern',
      },
    ];
    return (
      <Root>
        <SubTitleBox title="Experience" />
        {_.map(items, item => this._renderItem(item))}
        <BottomSeparator />
      </Root>
    );
  }
}

export default Experience;
