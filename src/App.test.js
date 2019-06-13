import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import Culture from './Components/Culture';

it('test of footer', () => {
  const footer = document.createElement('Footer');
  ReactDOM.render(<Contact />, footer);
});

it('test of culture', () => {
  const grid = document.createElement('Grid');
  ReactDOM.render(<Culture />, grid);
});
