import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();