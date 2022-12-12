import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line
import $ from 'jquery'
// eslint-disable-next-line
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor} from './redux/store'

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</PersistGate>
		
	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
