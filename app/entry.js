import { App } from './model.js';
import ReactDOM from 'react-dom';
import React from 'react';
import Todos from './src/todos.jsx';
import './styles/styles.css';

var model = new App();

// main function
const main = () => {
  return ReactDOM.render(
    <Todos model={model} />,
    document.getElementById('react-view')
  );

}

// subscrib the main function to model
// any changes to model will invoke main
model.subscribe(main);

// invoke main with application model
main();
