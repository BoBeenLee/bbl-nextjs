import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SubTitle, ContentTitle } from '../../components/Title';
import { Separator } from '../../components/Separator';
import { LineText } from '../../components/Text';

const Root = styled.div``;

const ItemBox = styled.div`
  padding-top: 30px;
  padding-left: 10px;
`;

const TitleBox = styled(ContentTitle)`
  margin-bottom: 5px;
`;

const BottomSeparator = styled(Separator)`
  margin: 40px 0;
`;

function Education() {
  return (
    <Root>
      <SubTitle title="Education" />
      <ItemBox>
        <TitleBox title="Sungkonghoe University" />
        <LineText>Software Engineering / 2010.3 - 2015.8</LineText>
      </ItemBox>
      <BottomSeparator />
    </Root>
  );
}

export default Education;
