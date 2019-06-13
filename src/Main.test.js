import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Components/Slider';

it('test of Main', () => {
  const carousel = document.createElement('Carousel');
  ReactDOM.render(<Slider />, carousel);
});
