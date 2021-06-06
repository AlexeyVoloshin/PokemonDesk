import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import configureStore from './store/configeStore';

import App from './App';

import './index.scss';


const store = configureStore({})


ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.querySelector('#root'));
