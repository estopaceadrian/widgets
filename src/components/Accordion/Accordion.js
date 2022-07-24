import React from 'react';
import AccordionContent from './AccordionContent';

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

const AccordionList = () => {
  return <AccordionContent items={items} />;
};

export default AccordionList;
