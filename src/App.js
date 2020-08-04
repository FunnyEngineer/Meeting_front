import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInForm from './Container/SignInForm/SignIn'
import Project from './Container/Project/Project'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {_, Projects, Electronics } from './pages';
import Timeline from './Container/Project/Timeline/Timeline';
import Headbar from './Container/Project/Headbar/Headbar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import InputCard from './Container/Project/InputForm/InputForm'


function App() {
  const btnStyle = {
    position: 'sticky',
    bottom: 10,
    left: window.innerWidth - 80,
    background: 'white',
  }
  return (
    <div className="container">
    {/* The corresponding component will show here if the current URL matches the path */}
    <Route path="/" exact component={SignInForm} />
    <Route path="/meeting" component={Project} />
    <Route path="/input" component={InputCard} />
  </div>
  );
}

export default App;
