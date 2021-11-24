import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Hunger Games',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Romeo and Juliet',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Last Samurai',
      category: 'History',
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();

export default initialState;
