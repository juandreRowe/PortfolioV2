// The reason why this is done is to load all dependencies of child dependencies and other micro-front-ends before the index is loaded
// So you can add the bootstrap contents here but it would render incorrectly (timing)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
    document.querySelector('#root-portfolio')
);