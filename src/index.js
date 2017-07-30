import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';

import 'fastHack.css'

import { configureStore } from './store';
const store = configureStore();
export { store }

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
