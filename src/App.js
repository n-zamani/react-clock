import React from 'react';
import { ClockPage, StopWatchPage, TimerPage } from "./_pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return <Router>
    <Route path="/" exact component={ClockPage} />
    <Route path="/stopwatch" component={StopWatchPage} />
    <Route path="/timer" component={TimerPage} />
  </Router>
}

export default App;
