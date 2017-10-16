import React from 'react';
import ReactDOM from 'react-dom';
import  App from'./js/screens/homeScreen';
import  './css/styles.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('wrapper'));
//The below statment would return the carousel
//ReactDOM.render(<Carousel  active={0}/>, document.getElementById('root'));
registerServiceWorker();
