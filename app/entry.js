import { App } from './model.js';
import ReactDOM from 'react-dom';
import React from 'react';
import Todos from './src/todos.jsx';

var model = new App();

// main function
const main = () => {
  return ReactDOM.render(
    <h1>hello</h1>,
    document.getElementById('react-view')
  );

}

// subscrib the main function to model
// any changes to model will invoke main
model.subscribe(main);

// invoke main with application model
main();
