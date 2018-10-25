import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './views/App';
import configureStore from './reducers';
import './styles/base.css';
import './styles/index.scss';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);