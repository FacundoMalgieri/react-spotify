import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from './store/ConfigureStore';
import {generateToken, loadUsers} from './actions/actions';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
	, document.getElementById('app')
);
