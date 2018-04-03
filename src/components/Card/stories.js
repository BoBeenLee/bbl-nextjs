import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { GithubCard, PortfolioCard, PostCard } from './';

const Root = styled.div`
  display: grid;
  grid-auto-columns: 50px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`;

const Child = styled.div`
  margin-top: 30px;
  grid-column: 2;
  grid-row: 1;
`;

storiesOf('Card', module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add('with GithubCard', () => (
    <Child>
      <GithubCard onPress={action('clicked')} />
    </Child>
  ))
  .add('with PortfolioCard', () => (
    <Child>
      <PortfolioCard
        githubUrl="https://github.com/BoBinLee/map"
        linkUrl="https://play.google.com/store/apps/details?id=com.nexters.intersection.intersectionapp"
        onPress={action('clicked')}
      />
    </Child>
  ))
  .add('with PostCard', () => (
    <Child>
      <PostCard onPress={action('clicked')} />
    </Child>
  ));
