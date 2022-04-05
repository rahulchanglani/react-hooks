import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateTut from './hooks/StateTut';
import ReducerTut from './hooks/ReducerTut';
import RefTut from './hooks/RefTut';
import EffectTut from './hooks/EffectTut';
import LayoutEffectTut from './hooks/LayoutEffectTut';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StateTut /> */}
    {/* <ReducerTut /> */}
    {/* <RefTut /> */}
    <EffectTut />
    {/* <LayoutEffectTut /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
