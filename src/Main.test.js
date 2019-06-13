import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';

it('test of Main', () => {
  const route = document.createElement('Switch');
  ReactDOM.render(<Main />, route);
});
