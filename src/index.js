import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/fonts/MullerBold.woff2';
import './assets/fonts/MullerMedium.woff2';
import './assets/fonts/MullerRegular.woff2';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
