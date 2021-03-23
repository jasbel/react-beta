import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <>
      <App/>
    </>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

serviceWorker.unregister();
