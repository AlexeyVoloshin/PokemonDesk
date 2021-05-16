import React from 'react';
import className from 'classnames';

import './custom.css';
import style from './App.module.scss';

const App = () => {
  console.log('###: some log');

  return <div className={className(style.header, 'color')}>Yes, we Did It! This is App Component!</div>;
};

export default App;
