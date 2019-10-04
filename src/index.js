import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import index from './client/js/index';
import store from './client/js/store/index';
import { createStore, applyMiddleware } from 'redux';
// import { addArticle } from './client/js/actions/index';
import { render } from "react-dom";
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';

// const store = createStore();
const rootEl = document.getElementById('root');

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), rootEl );

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   // The target element might be either root or app,
//   // depending on your development environment
//   // document.getElementById("app")
//   document.getElementById("root")
// );
// ReactDOM.render(<App />, document.getElementById('root'));