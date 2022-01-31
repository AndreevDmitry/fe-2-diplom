import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

import { App } from './components/app/App';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
	document.getElementById('root')
	);

serviceWorker.unregister();

export const ucFL = (value) => {
  let letterUpper = '';
  const findIndexDash = value.indexOf('-');
  
  if (findIndexDash === -1) {
    letterUpper = value.split('').shift().toUpperCase().concat(value.slice(1, value.length));
  } else {
    const sliceFirstLettersOfDash = value.slice(findIndexDash + 1);
    letterUpper = value.split('').shift().toUpperCase().concat(value.slice(1, findIndexDash)) + '-' + sliceFirstLettersOfDash.split('').shift().toUpperCase().concat(sliceFirstLettersOfDash.slice(1, sliceFirstLettersOfDash.length))
  } 
  return letterUpper;
}

export const numSpc = (value) => {
	let toSpace;
	const strVal = value.toString();
	if (strVal.length > 3) {
		toSpace = strVal.split('').slice(0, strVal.length - 3).join('') + ' ' + strVal.split('').splice(-3, 3).join('');
	} else {
		toSpace = value;
	}
	return toSpace;
}