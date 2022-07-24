import React from 'react';
import Accordion from './components/Accordion';
import Count from './components/Count';
import Search from './components/Search';

const items = [
  {
    title: ' What is React?',
    content: ' React is a front end javaswcript framework',
  },
  {
    title: 'Why use react?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by create components',
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
