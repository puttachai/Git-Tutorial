import React from 'react';
import ReactDOM from 'react-dom';
import Me from './me';
import Menu from './menu';

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Menu />
      <Me />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
