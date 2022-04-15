import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import StateTut from './hooks/UseState/StateTut';
import ReducerTut from './hooks/UseReducer/ReducerTut';
import RefTut from './hooks/UseRef/RefTut';
import EffectTut from './hooks/UseEffect/EffectTut';
import LayoutEffectTut from './hooks/UseLayoutEffect/LayoutEffectTut';
import TransitionTut from './hooks/UseTransitionUseDeferredValue/TransitionTut';
import ImperativeHandleTut from './hooks/UseImperativeHandle/ImperativeHandleTut';
import ContextTut from './hooks/UseContext/ContextTut';
import CallbackTut from './hooks/UseCallback/CallbackTut';
import MemoTut from './hooks/UseMemo/MemoTut';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StateTut /> */}
    {/* <ReducerTut /> */}
    {/* <RefTut /> */}
    {/* <EffectTut /> */}
    {/* <LayoutEffectTut /> */}
    {/* <TransitionTut /> */}
    {/* <ImperativeHandleTut /> */}
    {/* <ContextTut /> */}
    <MemoTut />
    {/* <CallbackTut /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
