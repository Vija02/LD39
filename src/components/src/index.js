// import React from 'react';
// import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native'
import App from './containers/App';

AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') })

// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
